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
        lineHeight: '1.5',
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
      ul: {
        li: {
          position: 'relative',
          paddingLeft: '1.5em',
          _before: {
            content: `""`,
            display: 'block',
            background: 'brand.400',
            width: '0.3em',
            height: '0.3em',
            borderRadius: '50%',
            position: 'absolute',
            top: '0.5em',
            left: '0.5em',
          },
        },
      },
      ol: {
        counterReset: 'count 0',
        li: {
          position: 'relative',
          paddingLeft: '1.5em',
          listStyle: 'none',
          _before: {
            content: `counter(count)"."`,
            counterIncrement: 'count 1',
            display: 'inline-block',
            color: 'brand.400',
            fontWeight: '600',
            position: 'absolute',
            top: '0',
            left: '0.2em',
          },
        },
      },
    },
  },
});
