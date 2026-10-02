import { retrieve, normalize } from '../src/engine/retrieve.ts';
import { sources } from '../src/knowledge/data.ts';
function assert(value: unknown, label: string){if(!value)throw new Error(label);console.log('PASS '+label);}
const cases=[['شحنة محلية متأخرة يومين','delay'],['The parcel is delayed with no movement','delay'],['هل يوجد تعويض لشحنة تالفة','damage'],['The box arrived broken','damage'],['تغيير عنوان بعد خروج الشحنة','address'],['Can we reroute to another address after dispatch?','address']];
for(const [q,id] of cases){const r=retrieve(q);assert(r.sufficient&&r.evidence.some(e=>e.source.id===id),q);assert(r.evidence.every(e=>sources.some(s=>s.id===e.source.id&&s.chunks.some(c=>c.id===e.chunk.id&&c.text===e.chunk.text))),'Exact dataset evidence: '+id);}
assert(normalize('تَأْخِير')===normalize('تاخير'),'Arabic normalization');
assert(!retrieve('What is the annual leave policy?').sufficient,'Unrelated fallback');
assert(!retrieve('مرحبا').sufficient,'Weak fallback');
assert(JSON.stringify(retrieve(cases[0][0]).evidence.map(e=>e.source.id))!==JSON.stringify(retrieve(cases[2][0]).evidence.map(e=>e.source.id)),'Distinct source sets');
assert(sources.length===5&&sources.reduce((n,s)=>n+s.chunks.length,0)===15,'Dataset counts');
