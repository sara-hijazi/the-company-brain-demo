export function Icon({name,size=22}:{name:string;size?:number}) {
 const paths:Record<string, React.ReactNode>={
 brain:<><path d="M12 5c-3-5-9-1-7 3-5 2-3 8 0 8-1 5 6 6 7 2V5Zm0 0c3-5 9-1 7 3 5 2 3 8 0 8 1 5-6 6-7 2"/><path d="M7 8l2 2M5 16l4-2m7-6-2 2m5 6-4-2"/></>,
 home:<><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7"/></>,sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/></>,moon:<path d="M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z"/>,arrow:<path d="M4 12h16m-6-6 6 6-6 6"/>,file:<><path d="M5 3h9l5 5v13H5V3Zm9 0v6h5M8 13h8m-8 4h6"/></>,check:<path d="m5 12 4 4L19 6"/>,close:<path d="m6 6 12 12M6 18 18 6"/>,search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,spark:<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>
 };
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.file}</svg>
}
