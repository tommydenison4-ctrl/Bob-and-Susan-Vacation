export function timeUntil(date:string,time?:string){
  if(!time) return null;
  const target=new Date(`${date}T${time}:00`);
  const now=new Date();
  const ms=target.getTime()-now.getTime();
  if(ms<=0)return 'Departure time passed';
  const days=Math.floor(ms/86400000);
  if(days>0)return `${days}d`;
  const h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000);
  return `${h}h ${m}m`;
}
