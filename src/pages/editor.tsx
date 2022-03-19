import { Box, Flex, Textarea } from '@chakra-ui/react';
import * as React from 'react';
const { useState } = React;
import { Header } from '../components/header';
const StorageKey = 'pages/editor:textarea';
export const Editor: React.FC = () => {
  const [text, setText] = useState<string>(
    localStorage.getItem(StorageKey) || ''
  );
  return (
    <>
      <Header />
      <Flex position='fixed' paddingTop='14' w='100vw' h='100vh'>
        <Box w='50vw' borderRight='1px'>
          <Textarea
            placeholder='Markdown'
            isFullWidth
            height='100%'
            variant='flushed'
            p='3'
            isInvalid
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </Box>
        <Box w='50vw' p='3' overflowY='auto'>
          Text入力エリア
        </Box>
      </Flex>
    </>
  );
};
