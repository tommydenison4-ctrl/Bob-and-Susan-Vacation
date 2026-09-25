export type MarinaExperience={
  id:string;
  emoji:string;
  title:string;
  category:'Food & Drink'|'Relax'|'Games & Sport'|'Entertainment'|'Enrichment';
  deck?:string;
  detail:string;
  timing:string;
};

export const marinaExperiences:MarinaExperience[]=[
  {id:'chef-studio',emoji:'👨‍🍳',title:"Chef's Studio",category:'Enrichment',deck:'Deck 12',detail:'Small-group culinary seminars, chef demonstrations and destination-focused technique sessions. Launches on Marina sailings from Nov. 5, 2026.',timing:'Check Currents for sessions / registration'},
  {id:'culinary-center',emoji:'🍳',title:'The Culinary Center',category:'Enrichment',deck:'Deck 12',detail:'Hands-on cooking classes at individual workstations, offered on virtually every voyage.',timing:'Check Currents for classes'},
  {id:'bakery',emoji:'🥐',title:'The Bakery',category:'Food & Drink',deck:'Near Baristas',detail:'Fresh French and Italian pastries. New on Marina sailings from Nov. 5, 2026.',timing:'Open daily until early evening'},
  {id:'afternoon-tea',emoji:'🫖',title:'Afternoon Tea',category:'Food & Drink',detail:'White-glove tea service with finger sandwiches, scones, petits fours and live string music.',timing:'Offered each afternoon; check Currents for venue/time'},
  {id:'baristas',emoji:'☕️',title:'Baristas',category:'Food & Drink',deck:'Deck 14',detail:'Complimentary illy espresso drinks, pastries, sandwiches and biscotti.',timing:'Drop in during the day'},
  {id:'wine-tasting',emoji:'🍷',title:'Wine Tasting',category:'Food & Drink',detail:'Guided wine tastings are a recurring Oceania enrichment activity.',timing:'Check Currents for tastings'},
  {id:'library',emoji:'📚',title:'English-Style Library',category:'Relax',deck:'Deck 14',detail:'Quiet reading room with a large book collection and sea views.',timing:'Any quiet time onboard'},
  {id:'spa',emoji:'🧖',title:'Aquamar Spa + Vitality Center',category:'Relax',deck:'Deck 14',detail:'Spa treatments and wellness facilities.',timing:'Book onboard'},
  {id:'pool',emoji:'🏊',title:'Pool & Whirlpools',category:'Relax',deck:'Deck 12',detail:'Pool deck with saltwater pool and whirlpools.',timing:'Great after a port day'},
  {id:'fitness',emoji:'🏃',title:'Fitness Center / Track',category:'Games & Sport',deck:'Deck 14 / upper deck',detail:'Workout facilities plus outdoor fitness track.',timing:'Morning or sea day'},
  {id:'trivia',emoji:'🧠',title:'Team Trivia / Brain Games',category:'Games & Sport',detail:'Trivia, brainteasers and MENSA-style quizzes are recurring onboard activities.',timing:'Often daily; check Currents'},
  {id:'bridge',emoji:'🃏',title:'Bridge',category:'Games & Sport',detail:'Bridge games and tournaments are part of Oceania onboard programming.',timing:'Check Currents'},
  {id:'pickleball',emoji:'🏓',title:'Pickleball',category:'Games & Sport',detail:'Available on the sports deck.',timing:'Sea day / free afternoon'},
  {id:'putting',emoji:'⛳️',title:'Putting Green',category:'Games & Sport',detail:'Practice putting or join scheduled deck competitions.',timing:'Sea day / free afternoon'},
  {id:'deck-games',emoji:'🎯',title:'Bocce, Croquet & Shuffleboard',category:'Games & Sport',detail:'Marina offers classic deck games including bocce, croquet and shuffleboard.',timing:'Sea day / free afternoon'},
  {id:'guest-speaker',emoji:'🎤',title:'Guest Speaker',category:'Enrichment',detail:'Destination and cultural talks may be offered during the voyage.',timing:'Check Currents'},
  {id:'show',emoji:'🎭',title:'Production Show / Guest Entertainer',category:'Entertainment',detail:'Evenings commonly feature production shows, vocalists, musicians and guest entertainers.',timing:'Check Currents each evening'},
  {id:'live-music',emoji:'🎻',title:'Live Music',category:'Entertainment',detail:'Live music is part of the evening entertainment program around the ship.',timing:'Check Currents / lounges'},
  {id:'casino',emoji:'🎰',title:'Casino',category:'Entertainment',deck:'Deck 6',detail:'Monte Carlo-style casino for an evening stop-in.',timing:'When open at sea'}
];
