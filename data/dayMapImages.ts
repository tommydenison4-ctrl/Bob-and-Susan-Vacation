export type DayMapImage={label:string;src:string;note?:string;stops:string[];searchContext:string;spriteIndex?:number;spriteCount?:number};
export const dayMapImages:Record<string,DayMapImage[]>={
  '2026-11-13':[
    {label:'Civitavecchia station → hotel',src:'/maps/bob/hires1.webp',spriteIndex:0,spriteCount:3,note:'Bob’s original arrival map',searchContext:'Civitavecchia, Italy',stops:['Civitavecchia Station','Via Francesco Crispi','Santa Fermina','Hotel de La Ville']},
    {label:'Civitavecchia waterfront walk',src:'/maps/bob/hires1.webp',spriteIndex:1,spriteCount:3,note:'Bob’s original walking map · corrected to Bob’s handwritten stop order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Promenade','Falcone & Borsellino Monument','Piazza della Vita','Parco Flavio Gagliardini','Flama Alfiero Antonini','Bacio della Memoria','Forte Michelangelo','Museo Archeologico Nazionale','Hotel de La Ville']},
  ],
  '2026-11-14':[
    {label:'Civitavecchia walking route',src:'/maps/bob/hires1.webp',spriteIndex:2,spriteCount:3,note:'Approx. 3.7 km / 52 min before stops · Bob’s handwritten order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Corso Centocelle','Mercato Storico','Piazza Leandra','Archetto Passage / Piazza Aurelio Saffi','Fortino San Pietro / Lighthouse','Roman Dock','Fontana del Vanvitelli','Hotel de La Ville']},
  ],
  '2026-11-15':[
    {label:'Morning Civitavecchia walk',src:'/maps/bob/hires2.webp',spriteIndex:0,spriteCount:3,note:'Before embarkation · Bob’s handwritten order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Echo Point','Piazza della Vita','Museo Archeologico Nazionale','Hotel de La Ville']},
    {label:'Transfer toward cruise port',src:'/maps/bob/hires2.webp',spriteIndex:1,spriteCount:3,note:'Bob’s original port-orientation map',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Civitavecchia waterfront','Cruise terminal']},
  ],
  '2026-11-16':[
    {label:'Sorrento free-time walk',src:'/maps/bob/hires2.webp',spriteIndex:2,spriteCount:3,note:'Approx. 2 km / 29 min · Bob’s handwritten order',searchContext:'Sorrento, Italy',stops:['Piazza Tasso','Vallone dei Mulini','Giardini di Cataldo','Basilica di Sant’Antonino','Cloister of St. Francis','Villa Comunale','Piazza della Vittoria','Limonoro / Corso Italia','Piazza Tasso']},
  ],
  '2026-11-18':[
    {label:'Cruise port → pickup',src:'/maps/bob/hires3.webp',spriteIndex:0,spriteCount:3,note:'Approx. 400 m / 6 min',searchContext:'Valletta, Malta',stops:['Valletta Cruise Port','Valletta Waterfront','Pickup point']},
    {label:'Mdina free-time walk',src:'/maps/bob/hires3.webp',spriteIndex:1,spriteCount:3,note:'Bob’s original Mdina route',searchContext:'Mdina, Malta',stops:['Main Gate','St. Paul’s Cathedral','Carmelite Priory','Greeks Gate','Old City Fortress','Main Gate']},
    {label:'Valletta post-tour walk',src:'/maps/bob/hires3.webp',spriteIndex:2,spriteCount:3,note:'Approx. 2.3 km / 36 min',searchContext:'Valletta, Malta',stops:['St. George’s Square','Grandmaster’s Palace','Republic Street','Casa Rocca Piccola','Fort St. Elmo','Merchant Street','Upper Barrakka Gardens','Saluting Battery','Valletta Waterfront']},
  ],
  '2026-11-19':[
    {label:'Trapani old-town walk',src:'/maps/bob/hires4.webp',spriteIndex:0,spriteCount:3,note:'Approx. 3.8 km / 53 min · Bob’s handwritten order',searchContext:'Trapani, Sicily, Italy',stops:['Trapani Port','Cathedral San Lorenzo','Porta Oscura / Clock Tower','Palazzo Senatorio','Fish Market','Tramontana Walls','Conca Bastion','Torre di Ligny','Corso Vittorio Emanuele','Trapani Port']},
  ],
  '2026-11-25':[
    {label:'Cruise bus / Columbus Monument',src:'/maps/bob/hires4.webp',spriteIndex:1,spriteCount:3,note:'Port-to-city orientation',searchContext:'Barcelona, Spain',stops:['Barcelona cruise terminal','T3 cruise bus','Christopher Columbus Monument','Hotel Barcelona Catedral']},
    {label:'Hotel / Gothic Quarter walk',src:'/maps/bob/hires4.webp',spriteIndex:2,spriteCount:3,note:'First Barcelona walking loop',searchContext:'Barcelona, Spain',stops:['Hotel Barcelona Catedral','Plaça Nova','Casa de l’Ardiaca','Barcelona Cathedral','Pont del Bisbe','Temple d’Augustus','Plaça Sant Jaume','Plaça Sant Josep Oriol','Santa Maria del Pi','Mercat de la Boqueria']},
    {label:'Market walking loop',src:'/maps/bob/hires5.webp',spriteIndex:0,spriteCount:1,note:'Second Barcelona walking loop',searchContext:'Barcelona, Spain',stops:['Mercat de la Boqueria','El Corte Inglés','Palau de la Música Catalana','Mercat Santa Caterina','Picasso Museum','MEAM Museum','Santa Maria del Mar','Roman Walls','Hotel Barcelona Catedral']},
  ],
};
