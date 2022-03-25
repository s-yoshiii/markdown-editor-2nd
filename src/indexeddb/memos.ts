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
