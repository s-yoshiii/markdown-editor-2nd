import Dexie from 'dexie';
import { getDate } from '../utils';
const db = new Dexie('markdown-editor');
export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}
db.version(1).stores({
  memos: '&datetime',
});
const memos: Dexie.Table<MemoRecord, string> = db.table('memos');
export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = getDate();
  await memos.put({ datetime, title, text });
};
const NUM_PER_PAGE: number = 10;
export const getMemoPageCount = async (): Promise<number> => {
  const totalCount = await memos.count();
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE);
  return pageCount > 0 ? pageCount : 1;
};
export const getMemos = (page: number): Promise<MemoRecord[]> => {
  const offset = (page - 1) * NUM_PER_PAGE;
  return memos
    .orderBy('datetime')
    .reverse()
    .offset(offset)
    .limit(NUM_PER_PAGE)
    .toArray();
};
