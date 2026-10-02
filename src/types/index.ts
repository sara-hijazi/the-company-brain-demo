export type Lang = 'ar' | 'en';
export type Bilingual = Record<Lang, string>;
export type Topic = 'delay' | 'damage' | 'address' | 'sla' | 'escalation';
export interface Chunk { id: string; title: Bilingual; text: Bilingual; topics: Topic[]; keywords: string[] }
export interface Source { id: string; title: Bilingual; category: Bilingual; version: string; effective: string; chunks: Chunk[] }
export interface Evidence { source: Source; chunk: Chunk; score: number }
export interface Result { evidence: Evidence[]; sufficient: boolean; topics: Topic[] }
