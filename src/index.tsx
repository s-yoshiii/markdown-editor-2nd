import * as React from 'react';
import { render } from 'react-dom';
import { Providers } from './providers';
import { Editor } from './pages/editor';
import { History } from './pages/history';
import { useStateWithStorage } from './hooks/use_state_with_storage';
import { Navigate, Route, Routes } from 'react-router-dom';
const StorageKey = '/editor:text';
const Main: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey);
  return (
    <Providers>
      <Routes>
        <Route
          path='/editor'
          element={<Editor text={text} setText={setText} />}
        />
        <Route path='/history' element={<History setText={setText} />} />
        <Route path='*' element={<Navigate to='/editor' />} />
      </Routes>
    </Providers>
  );
};

render(<Main />, document.getElementById('app'));
