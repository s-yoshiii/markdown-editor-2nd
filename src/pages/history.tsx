import { Container, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { SaveButton } from '../components/save_button';
import { getMemos, MemoRecord } from '../indexeddb/memos';

const { useState, useEffect } = React;
export const History: React.FC = () => {
  const navigate = useNavigate();
  const [memos, setMemos] = useState<MemoRecord[]>([]);
  useEffect(() => {
    getMemos().then(setMemos);
  }, []);
  return (
    <>
      <Header title={'History'}>
        <SaveButton onClick={() => navigate('/editor')}>
          エディタへ戻る
        </SaveButton>
      </Header>
      <VStack
        pos='fixed'
        paddingTop='14'
        w='100vw'
        h='100vh'
        zIndex={1}
        bg='brand.100'
        paddingX='14'
        paddingY='14'
      >
        {memos.map((memo) => (
          <Container maxW='container.sm' key={memo.datetime}>
            {memo.title}
            {memo.text}
          </Container>
        ))}
      </VStack>
    </>
  );
};
