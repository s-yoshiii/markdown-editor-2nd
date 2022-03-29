import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { SaveButton } from '../components/save_button';
export const History: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title={'History'}>
        <SaveButton onClick={() => navigate('/editor')}>
          エディタへ戻る
        </SaveButton>
      </Header>
    </>
  );
};
