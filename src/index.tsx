import * as React from 'react';
import { render } from 'react-dom';
import { Providers } from './providers';
import { Editor } from './pages/editor';

const Main = (
  <Providers>
    <Editor />
  </Providers>
);

render(Main, document.getElementById('app'));
