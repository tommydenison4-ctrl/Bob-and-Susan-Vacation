export type DiningMenu={
  restaurant:string;
  date:string;
  time?:string;
  cuisine:string;
  summary:string;
  highlights:string[];
  menuUrl:string;
  sourceLabel:string;
  note:string;
};

export const diningMenus:DiningMenu[]=[
  {
    restaurant:'Polo Grill',date:'2026-11-15',time:'8:30 PM',cuisine:'Classic steakhouse',
    summary:'Oceania’s steakhouse with aged USDA Prime beef, seafood and classic steakhouse sides.',
    highlights:['Filet mignon','Ribeye / New York strip','Polo surf & turf','Whole Maine lobster','Lobster bisque','Truffle mac & cheese'],
    menuUrl:'https://www.oceaniacruises.com/sites/default/files/2025-04/Polo-Grill-Dinner-Menu-Vista_04.25.pdf',
    sourceLabel:'Oceania sample dinner menu',note:'Sample Oceania menu. Exact Marina items and availability can change onboard.'
  },
  {
    restaurant:'Toscana',date:'2026-11-16',time:'8:30 PM',cuisine:'Italian / Tuscan',
    summary:'Oceania’s Italian specialty restaurant featuring regional pasta, risotto, seafood and Tuscan-style mains.',
    highlights:['Lasagne alla Bolognese','Tagliolini carbonara','Lobster risotto','Branzino','Osso buco alla Milanese','Aragosta fra Diavolo'],
    menuUrl:'https://www.oceaniacruises.com/sites/default/files/2024-09/toscana-dinner-menu.pdf',
    sourceLabel:'Oceania Toscana dinner menu',note:'Official Oceania sample menu; items are subject to change.'
  },
  {
    restaurant:'Jacques',date:'2026-11-17',time:'9:00 PM',cuisine:'French',
    summary:'Jacques Pépin-inspired French dining with classic bistro and fine-dining preparations.',
    highlights:['Filet de bœuf Rossini','Homard Thermidor','Bouillabaisse','Dover sole','Herb-roasted lamb','French desserts'],
    menuUrl:'https://www.oceaniacruises.com/sites/default/files/2024-10/Jacques.Menu_.pdf',
    sourceLabel:'Oceania Jacques menu',note:'Official Oceania sample menu; Marina selections can change.'
  }
];

export function menusForDate(date:string){return diningMenus.filter(x=>x.date===date)}
