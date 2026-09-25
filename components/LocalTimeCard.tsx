'use client';
import {useEffect,useState} from 'react';
export default function LocalTimeCard({timezone}:{timezone:string}){const [txt,setTxt]=useState('—');useEffect(()=>{const f=()=>setTxt(new Intl.DateTimeFormat([], {timeZone:timezone,hour:'numeric',minute:'2-digit',second:'2-digit'}).format(new Date()));f();const i=setInterval(f,1000);return()=>clearInterval(i)},[timezone]);return <div className="card"><div className="eyebrow">LOCAL TIME</div><div className="metric">{txt}</div><div className="muted">{timezone}</div></div>}
