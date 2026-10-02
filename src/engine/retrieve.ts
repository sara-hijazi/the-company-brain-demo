import { sources } from '../knowledge/data.ts';
import type { Topic, Result } from '../types/index.ts';
export const normalize = (value: string) => value.toLowerCase().replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[\u064B-\u065F\u0640]/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
const signals: Record<Topic,string[]> = {
 delay:['متاخر','تاخير','متاخرة','late','delayed','delay','no movement','لم تتحرك','ما تحركت'],
 damage:['تالف','تلف','مكسور','متضرر','damaged','damage','broken','compensation','تعويض'],
 address:['عنوان','address','reroute','rerouting'],
 sla:['sla','اتفاقيه','نافذه التوصيل','delivery window','expected delivery','كم يوم','مده التوصيل'],
 escalation:['تصعيد','escalate','escalation','مشرف','supervisor']
};
export function retrieve(question: string): Result {
 const q=normalize(question); const tokens=new Set(q.split(' ').filter(t=>t.length>2));
 const topics=(Object.keys(signals) as Topic[]).filter(topic=>signals[topic].some(signal=>q.includes(normalize(signal))));
 if (!topics.length) return { evidence:[], sufficient:false, topics:[] };
 const evidence=sources.flatMap(source=>source.chunks.map(chunk=>{
 const topicScore=chunk.topics.filter(topic=>topics.includes(topic)).length*10;
 const keywordScore=chunk.keywords.filter(keyword=>q.includes(normalize(keyword))).length*3;
 const overlap=normalize(chunk.text.ar+' '+chunk.text.en).split(' ').filter(t=>tokens.has(t)).length;
 return {source,chunk,score:topicScore+keywordScore+Math.min(overlap,5)};
 })).filter(e=>e.chunk.topics.some(topic=>topics.includes(topic))).sort((a,b)=>b.score-a.score || a.chunk.id.localeCompare(b.chunk.id));
 // Keep a compact evidence set while preserving the operational sequence within sources.
 const selected=evidence.slice(0, topics.length>1 ? 8 : 6);
 selected.sort((a,b)=>sources.indexOf(a.source)-sources.indexOf(b.source)||a.source.chunks.indexOf(a.chunk)-b.source.chunks.indexOf(b.chunk));
 return {evidence:selected,sufficient:selected.length>0,topics};
}
