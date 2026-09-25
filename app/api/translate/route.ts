import {NextResponse} from 'next/server';

export async function POST(req:Request){
 try{
  const body=await req.json();const q=String(body?.q||'').trim();const source=String(body?.source||'auto');const target=String(body?.target||'en');
  if(!q)return NextResponse.json({error:'Enter text to translate.'},{status:400});
  if(!target)return NextResponse.json({error:'Choose a target language.'},{status:400});
  const url=new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client','gtx');url.searchParams.set('sl',source||'auto');url.searchParams.set('tl',target);url.searchParams.set('dt','t');url.searchParams.set('q',q);
  const r=await fetch(url.toString(),{cache:'no-store'});if(!r.ok)throw new Error('Translation service unavailable');
  const j=await r.json();const translation=Array.isArray(j?.[0])?j[0].map((x:any)=>x?.[0]||'').join(''):'';const detected=typeof j?.[2]==='string'?j[2]:'';
  if(!translation)throw new Error('No translation returned');
  return NextResponse.json({translation,detected});
 }catch(e:any){return NextResponse.json({error:e?.message||'Translation failed'},{status:500})}
}
