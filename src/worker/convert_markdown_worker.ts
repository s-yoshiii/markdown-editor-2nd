import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
const worker: Worker = self as any;
worker.addEventListener('message', (event) => {
  const text = event.data;
  const html = sanitizeHtml(marked.parse(text), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'],
  });
  worker.postMessage({ html });
});
