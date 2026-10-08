const assert=require('node:assert/strict'),fs=require('fs'),ts=require('typescript');
function load(file){const m={exports:{}};new Function('module','exports','require',ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(m,m.exports,require);return m.exports}
const {verifiedRoutes}=load('data/verifiedRoutes.ts');const {sections,routeParts,routePartUrl,plannedLegUrl,liveLegUrl,isReturn}=load('lib/routeNavigation.ts');
const {dayMapImages}=load('data/dayMapImages.ts');
let sectionCount=0,legCount=0,linkCount=0,unconfirmed=[];
for(const [day,maps] of Object.entries(dayMapImages)){
 assert.equal(sections[day].length,maps.length,day+' map/section count');
 const all=verifiedRoutes[day];
 sections[day].forEach((section,index)=>{
  sectionCount++;const stops=all.slice(section.start,section.end+1);
  assert.equal(stops.length,maps[index].stops.length,day+' section retains all stop positions');
  assert.equal(stops[0],all[section.start]);assert.equal(stops.at(-1),all[section.end]);
  assert.ok(stops.every(s=>s.query),'Every navigable stop has an explicit identity');
  if(section.mode==='transfer')return;
  const parts=routeParts(stops);const reconstructed=parts.flatMap((p,i)=>i?p.slice(1):p);
  assert.deepEqual(reconstructed,stops,'No stop lost at chunk boundaries');
  for(let i=1;i<stops.length;i++){
   legCount++;const url=plannedLegUrl(stops[i-1],stops[i],section.mode);
   if(stops[i-1].confirm||stops[i].confirm){assert.equal(url,null);continue;}
   const p=new URL(url).searchParams;assert.equal(p.get('origin'),stops[i-1].query);assert.equal(p.get('destination'),stops[i].query);assert.equal(p.get('travelmode'),section.mode);assert.ok(!p.has('waypoints'));linkCount++;
   const live=new URL(liveLegUrl(stops[i],section.mode)).searchParams;assert.ok(!live.has('origin'));assert.equal(live.get('destination'),stops[i].query);
  }
  for(const part of parts){const url=routePartUrl(part,section.mode);if(!url){assert.ok(part.some(s=>s.confirm));continue;}const p=new URL(url).searchParams;assert.ok(url.length<=2048);assert.ok((p.get('waypoints')||'').split('|').filter(Boolean).length<=3);assert.deepEqual([p.get('origin'),...(p.get('waypoints')||'').split('|').filter(Boolean),p.get('destination')],part.map(s=>s.query));}
  if(stops[0].query===stops.at(-1).query)assert.ok(isReturn(stops,stops.length-1));
 });
 for(const stop of all)if(stop.confirm)unconfirmed.push({day,name:stop.name,reason:stop.confirm});
}
for(const [day,index] of [['2026-11-13',1],['2026-11-14',0],['2026-11-15',0],['2026-11-16',0],['2026-11-18',1],['2026-11-19',0]]){const section=sections[day][index],stops=verifiedRoutes[day].slice(section.start,section.end+1);assert.ok(isReturn(stops,stops.length-1),day+' return remains explicit');}
for(const day of ['2026-11-17','2026-11-20','2026-11-21','2026-11-23','2026-11-24'])assert.equal(sections[day],undefined,'No independent tour-wide walking route');
assert.equal(isReturn(verifiedRoutes['2026-11-18'],1),false,'Duplicate waterfront is not a return before the route ends');
assert.equal(sections['2026-11-18'][1].start,3,'No walking link crosses the Mdina transfer');
assert.equal(sections['2026-11-25'][0].mode,'transfer','Cruise bus is not a pedestrian route');
assert.equal(routePartUrl(Array(6).fill(verifiedRoutes['2026-11-16'][0]),'walking'),null);
const result={days:Object.keys(dayMapImages).length,sections:sectionCount,plannedLegs:legCount,navigableLegs:linkCount,unconfirmed};
console.log(JSON.stringify(result,null,2));fs.writeFileSync('/tmp/route-audit-result.json',JSON.stringify(result,null,2));
