'use client';

export type MediaKind='image'|'video';
export type MemoryRecord={
  id:string;dayId:string;blob:Blob;kind:MediaKind;mimeType:string;fileName:string;
  lat?:number;lng?:number;landmark?:string;explanation?:string;personal?:string;takenAt:string;
};

const DB_NAME='bob-susan-travel';
const DB_VERSION=2;
const STORE='memories';

function db():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=()=>{const d=req.result;if(!d.objectStoreNames.contains(STORE))d.createObjectStore(STORE,{keyPath:'id'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
function txDone(tx:IDBTransaction){return new Promise<void>((resolve,reject)=>{tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}
export async function listMemories():Promise<MemoryRecord[]>{const d=await db();return new Promise((resolve,reject)=>{const r=d.transaction(STORE,'readonly').objectStore(STORE).getAll();r.onsuccess=()=>resolve((r.result as MemoryRecord[]).sort((a,b)=>b.takenAt.localeCompare(a.takenAt)));r.onerror=()=>reject(r.error);});}
export async function saveMemory(m:MemoryRecord){const d=await db();const tx=d.transaction(STORE,'readwrite');tx.objectStore(STORE).put(m);await txDone(tx);}
export async function deleteMemory(id:string){const d=await db();const tx=d.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);await txDone(tx);}
export async function replaceMemories(rows:MemoryRecord[]){const d=await db();const tx=d.transaction(STORE,'readwrite');const store=tx.objectStore(STORE);store.clear();rows.forEach(r=>store.put(r));await txDone(tx);}
