import { Box, Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Header } from '../components/header';
export const Editor: React.FC = () => {
  return (
    <>
      <Header />
      <Flex position='fixed' paddingTop='14' w='100vw' h='100vh'>
        <Box w='50vw' borderRight='1px'>
          Text入力エリア
        </Box>
        <Box w='50vw'>Text入力エリア</Box>
      </Flex>
    </>
  );
};
