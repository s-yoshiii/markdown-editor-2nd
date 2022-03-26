import * as React from 'react';
import { render } from 'react-dom';
import { Providers } from './providers';
import { Editor } from './pages/editor';
import { Navigate, Route, Routes } from 'react-router-dom';

const Main = (
  <Providers>
    <Routes>
      <Route path='/editor' element={<Editor />} />
      <Route
        path='/history'
        element={
          <>
            <h1>History</h1>
            <p>aaaaaaa</p>
          </>
        }
      />
      <Route path='*' element={<Navigate to='/editor' />} />
    </Routes>
  </Providers>
);

render(Main, document.getElementById('app'));
