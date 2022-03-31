import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { SaveButton } from '../components/save_button';
import { getMemos, MemoRecord } from '../indexeddb/memos';

const { useState, useEffect } = React;
interface Props {
  setText: (text: string) => void;
}
export const History: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [memos, setMemos] = useState<MemoRecord[]>([]);
  const { setText } = props;
  useEffect(() => {
    getMemos().then(setMemos);
  }, []);
  return (
    <>
      <Header title={'History'}>
        <SaveButton onClick={() => navigate('/editor')}>
          <ArrowBackIcon w='4' h='4' mr='1' />
          エディタへ戻る
        </SaveButton>
      </Header>
      <Box
        pos='fixed'
        paddingTop='14'
        w='100vw'
        h='100vh'
        zIndex={1}
        bg='brand.100'
        paddingX='14'
        paddingY='14'
        overflowY='auto'
      >
        <VStack spacing='24px' paddingY='24px'>
          {memos.map((memo) => (
            <Container
              maxW='container.sm'
              key={memo.datetime}
              onClick={() => {
                setText(memo.text);
                navigate('/editor');
              }}
            >
              <Box
                p='5'
                shadow='md'
                borderWidth='1px'
                bg='white'
                cursor='pointer'
                transition='.3s ease transform'
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Heading fontSize='xl'>{memo.title}</Heading>
                <Text mt={4}>{memo.text}</Text>
              </Box>
            </Container>
          ))}
        </VStack>
      </Box>
    </>
  );
};
