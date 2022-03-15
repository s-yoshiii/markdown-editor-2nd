import * as React from 'react';
import { render } from 'react-dom';
import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
const Main = (
  <ChakraProvider>
    <header>
      <h1>MarkDown Editor</h1>
    </header>
    <Flex color='white'>
      <Box w='25%' bg='#F6F2D4'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='#95D1CC'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='#5584AC'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='#22577E'>
        <Text>Box</Text>
      </Box>
    </Flex>
  </ChakraProvider>
);

render(Main, document.getElementById('app'));
