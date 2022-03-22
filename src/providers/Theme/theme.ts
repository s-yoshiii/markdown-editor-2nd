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
      h1: {
        fontSize: '5xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '3xl',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      h5: {
        fontSize: 'xl',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: 'lg',
        fontWeight: 'bold',
      },
    },
  },
});
