'use client';
export type ExpenseCategory='Food & Drink'|'Transportation'|'Tours / Attractions'|'Shopping'|'Hotel'|'Cruise'|'Other';
export type PaymentMethod='Card'|'Cash'|'Other';
export type Expense={id:string;dayId:string;merchant:string;amount:number;currency:string;cadAmount?:number;category:ExpenseCategory;paymentMethod:PaymentMethod;notes?:string;receiptDataUrl?:string;createdAt:string};
const DB='bob-susan-travel-local';const STORE='expenses';
function openDb():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:'id'})};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function listExpenses():Promise<Expense[]>{const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const r=tx.objectStore(STORE).getAll();r.onsuccess=()=>resolve((r.result as Expense[]).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)));r.onerror=()=>reject(r.error)})}
export async function saveExpense(e:Expense){const db=await openDb();return new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(e);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export async function deleteExpense(id:string){const db=await openDb();return new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export async function replaceExpenses(rows:Expense[]){const db=await openDb();return new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');const s=tx.objectStore(STORE);s.clear();rows.forEach(x=>s.put(x));tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export function makeId(){return typeof crypto!=='undefined'&&'randomUUID'in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}
