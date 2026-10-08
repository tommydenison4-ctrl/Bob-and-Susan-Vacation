export type NavigationStop={name:string;lat:number;lng:number;query?:string;placeId?:string;confirm?:string};
export type RouteSection={label:string;start:number;end:number;mode:'walking'|'driving'|'transfer'};
export const sections:Record<string,RouteSection[]>={
 '2026-11-13':[{label:'Station to hotel',start:0,end:3,mode:'walking'},{label:'Waterfront loop',start:3,end:12,mode:'walking'}],
 '2026-11-14':[{label:'Civitavecchia loop',start:0,end:8,mode:'walking'}],
 '2026-11-15':[{label:'Morning loop',start:0,end:4,mode:'walking'},{label:'Taxi to cruise port',start:4,end:5,mode:'driving'}],
 '2026-11-16':[{label:'Sorrento free-time loop',start:0,end:8,mode:'walking'}],
 '2026-11-18':[{label:'Walk to tour pickup',start:0,end:2,mode:'walking'},{label:'Mdina free-time loop',start:3,end:8,mode:'walking'},{label:'Valletta post-tour walk',start:9,end:17,mode:'walking'}],
 '2026-11-19':[{label:'Trapani walk after Oceania excursion',start:0,end:9,mode:'walking'}],
 '2026-11-25':[{label:'Cruise bus / city transfer',start:0,end:3,mode:'transfer'},{label:'Gothic Quarter walk',start:3,end:12,mode:'walking'},{label:'Market walk and return to hotel',start:12,end:20,mode:'walking'}]
};
export function plannedLegUrl(from:NavigationStop,to:NavigationStop,mode:'walking'|'driving'){
 if(!from.query||!to.query||from.confirm||to.confirm)return null;
 const params=new URLSearchParams({api:'1',origin:from.query,destination:to.query,travelmode:mode});
 if(from.placeId)params.set('origin_place_id',from.placeId);if(to.placeId)params.set('destination_place_id',to.placeId);
 return `https://www.google.com/maps/dir/?${params}`;
}
export function liveLegUrl(to:NavigationStop,mode:'walking'|'driving'){
 if(!to.query||to.confirm)return null;
 const params=new URLSearchParams({api:'1',destination:to.query,travelmode:mode,dir_action:'navigate'});if(to.placeId)params.set('destination_place_id',to.placeId);
 return `https://www.google.com/maps/dir/?${params}`;
}
// Each preview contains at most three intermediate stops, including on mobile browsers.
export function routeParts(stops:NavigationStop[]){
 const result:NavigationStop[][]=[];
 for(let i=0;i<stops.length-1;i+=4)result.push(stops.slice(i,i+5));
 return result;
}
export function routePartUrl(stops:NavigationStop[],mode:'walking'|'driving'){
 if(stops.length<2||stops.length>5||stops.some(s=>!s.query||s.confirm))return null;
 const params=new URLSearchParams({api:'1',origin:stops[0].query!,destination:stops[stops.length-1].query!,travelmode:mode});
 if(stops[0].placeId)params.set('origin_place_id',stops[0].placeId!);if(stops[stops.length-1].placeId)params.set('destination_place_id',stops[stops.length-1].placeId!);
 if(stops.length>2){params.set('waypoints',stops.slice(1,-1).map(s=>s.query).join('|'));if(stops.slice(1,-1).every(s=>s.placeId))params.set('waypoint_place_ids',stops.slice(1,-1).map(s=>s.placeId).join('|'));}
 const url=`https://www.google.com/maps/dir/?${params}`;
 return url.length<=2048?url:null;
}
export function isReturn(stops:NavigationStop[],i:number){return i===stops.length-1&&i>1&&(stops[0].query&&stops[i].query?stops[0].query===stops[i].query:stops[0].name===stops[i].name&&stops[0].lat===stops[i].lat&&stops[0].lng===stops[i].lng)}
