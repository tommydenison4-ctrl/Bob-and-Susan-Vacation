import {group1} from './mapImages1';
import {group2} from './mapImages2';
import {group3} from './mapImages3';
import {group4} from './mapImages4';
import {group5} from './mapImages5';

export type DayMapImage={label:string;src:string;note?:string;stops:string[];searchContext:string};
export const dayMapImages:Record<string,DayMapImage[]>={
  '2026-11-13':[
    {label:'Civitavecchia station → hotel',src:group1.nov13_station,note:'Bob’s original arrival map',searchContext:'Civitavecchia, Italy',stops:['Civitavecchia Station','Via Francesco Crispi','Santa Fermina','Hotel de La Ville']},
    {label:'Civitavecchia waterfront walk',src:group1.nov13_walk,note:'Bob’s original walking map · corrected to Bob’s handwritten stop order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Promenade','Falcone & Borsellino Monument','Piazza della Vita','Parco Flavio Gagliardini','Flama Alfiero Antonini','Bacio della Memoria','Forte Michelangelo','Museo Archeologico Nazionale','Hotel de La Ville']},
  ],
  '2026-11-14':[
    {label:'Civitavecchia walking route',src:group1.nov14_walk,note:'Approx. 3.7 km / 52 min before stops · Bob’s handwritten order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Corso Centocelle','Mercato Storico','Piazza Leandra','Archetto Passage / Piazza Aurelio Saffi','Fortino San Pietro / Lighthouse','Roman Dock','Fontana del Vanvitelli','Hotel de La Ville']},
  ],
  '2026-11-15':[
    {label:'Morning Civitavecchia walk',src:group2.nov15_walk,note:'Before embarkation · Bob’s handwritten order',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Echo Point','Piazza della Vita','Museo Archeologico Nazionale','Hotel de La Ville']},
    {label:'Transfer toward cruise port',src:group2.nov15_port,note:'Bob’s original port-orientation map',searchContext:'Civitavecchia, Italy',stops:['Hotel de La Ville','Civitavecchia waterfront','Cruise terminal']},
  ],
  '2026-11-16':[
    {label:'Sorrento free-time walk',src:group2.nov16_sorrento,note:'Approx. 2 km / 29 min · Bob’s handwritten order',searchContext:'Sorrento, Italy',stops:['Piazza Tasso','Vallone dei Mulini','Giardini di Cataldo','Basilica di Sant’Antonino','Cloister of St. Francis','Villa Comunale','Piazza della Vittoria','Limonoro / Corso Italia','Piazza Tasso']},
  ],
  '2026-11-18':[
    {label:'Cruise port → pickup',src:group3.nov18_pickup,note:'Approx. 400 m / 6 min',searchContext:'Valletta, Malta',stops:['Valletta Cruise Port','Valletta Waterfront','Pickup point']},
    {label:'Mdina free-time walk',src:group3.nov18_mdina,note:'Bob’s original Mdina route',searchContext:'Mdina, Malta',stops:['Main Gate','St. Paul’s Cathedral','Carmelite Priory','Greeks Gate','Old City Fortress','Main Gate']},
    {label:'Valletta post-tour walk',src:group3.nov18_valletta,note:'Approx. 2.3 km / 36 min',searchContext:'Valletta, Malta',stops:['St. George’s Square','Grandmaster’s Palace','Republic Street','Casa Rocca Piccola','Fort St. Elmo','Merchant Street','Upper Barrakka Gardens','Saluting Battery','Valletta Waterfront']},
  ],
  '2026-11-19':[
    {label:'Trapani old-town walk',src:group4.nov19_trapani,note:'Approx. 3.8 km / 53 min · Bob’s handwritten order',searchContext:'Trapani, Sicily, Italy',stops:['Trapani Port','Cathedral San Lorenzo','Porta Oscura / Clock Tower','Palazzo Senatorio','Fish Market','Tramontana Walls','Conca Bastion','Torre di Ligny','Corso Vittorio Emanuele','Trapani Port']},
  ],
  '2026-11-25':[
    {label:'Cruise bus / Columbus Monument',src:group4.nov25_columbus,note:'Port-to-city orientation',searchContext:'Barcelona, Spain',stops:['Barcelona cruise terminal','T3 cruise bus','Christopher Columbus Monument','Hotel Barcelona Catedral']},
    {label:'Hotel / Gothic Quarter walk',src:group4.nov25_hotel,note:'First Barcelona walking loop',searchContext:'Barcelona, Spain',stops:['Hotel Barcelona Catedral','Plaça Nova','Casa de l’Ardiaca','Barcelona Cathedral','Pont del Bisbe','Temple d’Augustus','Plaça Sant Jaume','Plaça Sant Josep Oriol','Santa Maria del Pi','Mercat de la Boqueria']},
    {label:'Market walking loop',src:group5.nov25_market,note:'Second Barcelona walking loop',searchContext:'Barcelona, Spain',stops:['Mercat de la Boqueria','El Corte Inglés','Palau de la Música Catalana','Mercat Santa Caterina','Picasso Museum','MEAM Museum','Santa Maria del Mar','Roman Walls','Hotel Barcelona Catedral']},
  ],
};
