const pickups:Record<string,{provider:string;time:string;place:string;query:string;note:string}>={
 '2026-11-16':{provider:'GetYourGuide',time:'8:30 AM',place:'Stazione Marittima, Naples',query:'Stazione Marittima, Molo Angioino, Napoli, Italy',note:'Bob’s meeting-point note: large U-shaped building. Six-hour Amalfi Coast tour, including three hours free in Sorrento. Confirm the exact entrance and guide meeting sign with the operator.'},
 '2026-11-18':{provider:'Tripadvisor',time:'9:00 AM',place:'2 Valletta Waterfront, Malta',query:'2 Valletta Waterfront, Malta',note:'Four-hour Valletta, Mdina and Blue Grotto tour. Meet at the waterfront address. Bob’s Barrakka Lift directions are separate. Confirm the exact meeting landmark with the operator.'}
};
const oceaniaDays=['2026-11-17','2026-11-19','2026-11-20','2026-11-21','2026-11-23','2026-11-24'];
export default function TourPickup({dayId}:{dayId?:string}){
 if(!dayId)return null;
 if(oceaniaDays.includes(dayId))return <div className="soft" style={{marginBottom:16}}><div className="eyebrow">OCEANIA EXCURSION PICKUP</div><strong>Meet at the ship for your Oceania excursion</strong><div className="muted small">Pickup is directly at the ship. Follow the onboard excursion instructions and staff. Separate walks shown below are independent of tour pickup.</div></div>;
 const p=pickups[dayId];if(!p)return null;
 const location=`https://www.google.com/maps/search/?${new URLSearchParams({api:'1',query:p.query})}`;
 const walk=`https://www.google.com/maps/dir/?${new URLSearchParams({api:'1',destination:p.query,travelmode:'walking',dir_action:'navigate'})}`;
 return <div className="soft" style={{marginBottom:16}}><div className="eyebrow">TOUR PICKUP · {p.provider} · {p.time}</div><strong>{p.place}</strong><p className="muted small">{p.note}</p><div className="actionRow"><a className="btn" href={location} target="_blank" rel="noreferrer">Google Maps · pickup location</a><a className="btn primary" href={walk} target="_blank" rel="noreferrer">Google Maps · walk to pickup</a></div><p className="muted small">Maps searches the named address; the exact guide meeting spot is not confirmed by these notes. Walking directions start from your current location.</p></div>
}
