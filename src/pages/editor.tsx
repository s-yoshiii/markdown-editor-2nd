import { Box, Flex, Textarea } from '@chakra-ui/react';
import * as React from 'react';
import { Header } from '../components/header';
export const Editor: React.FC = () => {
  return (
    <>
      <Header />
      <Flex position='fixed' paddingTop='14' w='100vw' h='100vh'>
        <Box w='50vw' borderRight='1px'>
          <Textarea
            placeholder='Here is a sample placeholder'
            isFullWidth
            height='100%'
            variant='flushed'
            p='3'
            isInvalid
          />
        </Box>
        <Box w='50vw' p='3'>
          Text入力エリア
        </Box>
      </Flex>
    </>
  );
};
