export type PrivateDocumentKind='passport'|'health'|'insurance'|'id'|'other';
export type PrivateDocumentRecord={id:string;person:'Bob'|'Susan'|'Both';kind:PrivateDocumentKind;title:string;notes?:string;expiry?:string;emergencyPhone?:string;issuer?:string;nationality?:string;coverageStart?:string;blob?:Blob;mime?:string;fileName?:string;createdAt:string;updatedAt:string};
const DB='bob-susan-travel-private-documents';const STORE='documents';
function openDb():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:'id'})};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
// Resolve only after the transaction commits, and release connections on every path.
async function documentTransaction<T>(mode:IDBTransactionMode,request:(store:IDBObjectStore)=>IDBRequest<T>):Promise<T>{
 const db=await openDb();
 try{return await new Promise<T>((resolve,reject)=>{
  const tx=db.transaction(STORE,mode);const r=request(tx.objectStore(STORE));
  tx.oncomplete=()=>resolve(r.result);
  tx.onerror=()=>reject(tx.error||r.error||new Error('Document storage failed'));
  tx.onabort=()=>reject(tx.error||new Error('Document storage was interrupted'));
 })}finally{db.close()}
}
export async function listPrivateDocuments():Promise<PrivateDocumentRecord[]>{const docs=await documentTransaction<PrivateDocumentRecord[]>('readonly',store=>store.getAll());return docs.sort((a,b)=>a.kind.localeCompare(b.kind)||a.person.localeCompare(b.person))}
export async function getPrivateDocument(id:string):Promise<PrivateDocumentRecord|undefined>{return documentTransaction<PrivateDocumentRecord|undefined>('readonly',store=>store.get(id))}
export async function savePrivateDocument(doc:PrivateDocumentRecord):Promise<void>{await documentTransaction('readwrite',store=>store.put(doc))}
export async function deletePrivateDocument(id:string):Promise<void>{const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export async function clearPrivateDocuments():Promise<void>{const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).clear();tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
