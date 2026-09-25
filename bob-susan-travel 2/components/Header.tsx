import Link from 'next/link';
export default function Header({subtitle}:{subtitle:string}){return <><div className="topbar"><div><div className="eyebrow">BOB & SUSAN'S TRAVELS</div><h1 className="title">Mediterranean 2026</h1><div className="muted">{subtitle}</div></div><Link href="/trip" className="pill">Nov 12–26</Link></div></>}
