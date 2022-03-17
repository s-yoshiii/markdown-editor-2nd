import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#F6F2D4',
      200: '#95D1CC',
      300: '#5584AC',
      400: '#22577E',
    },
  },
  styles: {
    global: {
      'body *': {
        boxSizing: 'border-box',
      },
    },
  },
});
