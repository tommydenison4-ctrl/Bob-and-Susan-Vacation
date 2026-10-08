'use client';
import {useEffect,useState} from 'react';
type P={name:string;lat:number;lng:number};
function distanceKm(a:{lat:number;lng:number},b:P){const R=6371,rad=(x:number)=>x*Math.PI/180;const dLat=rad(b.lat-a.lat),dLon=rad(b.lng-a.lng);const x=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
export default function BackToShip({ship}:{ship?:P}){const [msg,setMsg]=useState('');useEffect(()=>setMsg(''),[ship?.name]);
 function locate(){if(!ship)return;if(!navigator.geolocation){setMsg('Location is not available on this device.');return}setMsg('Finding your location…');navigator.geolocation.getCurrentPosition(p=>{const km=distanceKm({lat:p.coords.latitude,lng:p.coords.longitude},ship);setMsg(`About ${km<1?Math.round(km*1000)+' m':km.toFixed(1)+' km'} in a straight line from the approximate port reference. This is not a walking distance or the ship’s live position.`)},()=>setMsg('Location permission was not granted.'))}
 const port=ship?.name.replace('Oceania Marina · ','');
 const link=port?`https://www.google.com/maps/search/?${new URLSearchParams({api:'1',query:port})}`:null;
 return <div className="card accentBar"><div className="eyebrow">RETURN SAFETY</div><h3 className="sectionTitle" style={{marginTop:6}}>{ship?'Back to ship':'No return needed'}</h3><div className="muted">{ship?'Confirm the ship’s berth, permitted port entrance and return transport with Oceania. The port reference is not the ship’s live location.':'No ship return today.'}</div>{msg&&<p className="muted small">{msg}</p>}{ship&&<div className="actionRow" style={{marginTop:12}}><button className="btn primary" onClick={locate}>Check approximate port distance</button>{link&&<a className="btn" target="_blank" rel="noreferrer" href={link}>Google Maps · port reference</a>}</div>}</div>
}
