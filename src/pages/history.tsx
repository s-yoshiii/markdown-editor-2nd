import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SaveButton } from '../components/save_button';
export const History: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>History</h1>
      <SaveButton onClick={() => navigate('/editor')}>
        エディタへ戻る
      </SaveButton>
    </>
  );
};
