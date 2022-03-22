import { Box, Flex, Spacer, Textarea } from '@chakra-ui/react';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { useStateWithStorage } from '../hooks/use_state_with_storage';
import { Header } from '../components/header';
import { putMemo } from '../indexeddb/memos';
import { PrimaryButton } from '../components/primaryButton';
const StorageKey = 'pages/editor:textarea';
export const Editor: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey);
  const saveMemo = (): void => {
    putMemo('TITLE', text);
  };
  return (
    <>
      <Flex
        p={[4, 2]}
        pos='fixed'
        top='0'
        left='0'
        zIndex={2}
        w='100%'
        bg='brand.400'
        h='14'
      >
        <Header />
        <Spacer />
        <PrimaryButton onClick={saveMemo}>保存する</PrimaryButton>
      </Flex>
      <Flex
        pos='fixed'
        paddingTop='14'
        w='100vw'
        h='100vh'
        zIndex={1}
        bg='brand.100'
      >
        <Box w='50vw' borderRight='1px'>
          <Textarea
            placeholder='Markdown'
            height='100%'
            variant='flushed'
            p='3'
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </Box>
        <Box w='50vw' p='3' overflowY='auto'>
          <ReactMarkdown children={text} />
        </Box>
      </Flex>
    </>
  );
};
