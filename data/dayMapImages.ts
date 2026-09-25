import {group1} from './mapImages1';
import {group2} from './mapImages2';
import {group3} from './mapImages3';
import {group4} from './mapImages4';
import {group5} from './mapImages5';

export type DayMapImage={label:string;src:string;note?:string};
export const dayMapImages:Record<string,DayMapImage[]>={
  '2026-11-13':[
    {label:'Civitavecchia station → hotel',src:group1.nov13_station,note:'Bob’s original arrival map'},
    {label:'Civitavecchia waterfront walk',src:group1.nov13_walk,note:'Bob’s original walking map'},
  ],
  '2026-11-14':[
    {label:'Civitavecchia walking route',src:group1.nov14_walk,note:'Approx. 3.7 km / 52 min before stops'},
  ],
  '2026-11-15':[
    {label:'Morning Civitavecchia walk',src:group2.nov15_walk,note:'Before embarkation'},
    {label:'Transfer toward cruise port',src:group2.nov15_port,note:'Bob’s original port-orientation map'},
  ],
  '2026-11-16':[
    {label:'Sorrento free-time walk',src:group2.nov16_sorrento,note:'Approx. 2 km / 29 min'},
  ],
  '2026-11-18':[
    {label:'Cruise port → pickup',src:group3.nov18_pickup,note:'Approx. 400 m / 6 min'},
    {label:'Mdina free-time walk',src:group3.nov18_mdina,note:'Bob’s original Mdina route'},
    {label:'Valletta post-tour walk',src:group3.nov18_valletta,note:'Approx. 2.3 km / 36 min'},
  ],
  '2026-11-19':[
    {label:'Trapani old-town walk',src:group4.nov19_trapani,note:'Approx. 3.8 km / 53 min'},
  ],
  '2026-11-25':[
    {label:'Cruise bus / Columbus Monument',src:group4.nov25_columbus,note:'Port-to-city orientation'},
    {label:'Hotel / Gothic Quarter walk',src:group4.nov25_hotel,note:'First Barcelona walking loop'},
    {label:'Market walking loop',src:group5.nov25_market,note:'Second Barcelona walking loop'},
  ],
};
