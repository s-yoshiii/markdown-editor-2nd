import * as React from 'react';
import { render } from 'react-dom';
import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Editor } from './pages/editor';
const theme = extendTheme({
  colors: {
    brand: {
      100: '#F6F2D4',
      200: '#95D1CC',
      300: '#5584AC',
      400: '#22577E',
    },
  },
});
const Main = (
  <ChakraProvider theme={theme} resetCSS>
    <Heading
      as='h1'
      size='lg'
      p={[4, 2]}
      position={'fixed'}
      top={0}
      left={0}
      w='100%'
      h={12}
    >
      MarkDown Editor
    </Heading>
    <Editor />
    <Flex color='white'>
      <Box w='25%' bg='brand.100'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='brand.200'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='brand.300'>
        <Text>Box</Text>
      </Box>
      <Box w='25%' bg='brand.400'>
        <Text>Box</Text>
      </Box>
    </Flex>
  </ChakraProvider>
);

render(Main, document.getElementById('app'));
