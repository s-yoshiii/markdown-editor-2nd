import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import * as React from 'react';
export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};
export { theme };
