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
        marginBottom: '0.5em',
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold',
        marginBottom: '0.5em',
      },
      h3: {
        fontSize: '3xl',
        fontWeight: 'bold',
        marginBottom: '0.5em',
      },
      h4: {
        fontSize: '2xl',
        fontWeight: 'bold',
        marginBottom: '0.5em',
      },
      h5: {
        fontSize: 'xl',
        fontWeight: 'bold',
        marginBottom: '0.5em',
      },
      h6: {
        fontSize: 'lg',
        fontWeight: 'bold',
        marginBottom: '0.5em',
      },
      ul: {
        marginBottom: '1em',
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
        marginBottom: '1em',
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
      em: {
        fontStyle: 'italic',
      },
      hr: {
        borderColor: 'gray.400',
        margin: '1em 0',
      },
      p: {
        marginBottom: '1em',
      },
      a: {
        textDecoration: 'underline',
      },
      table: {
        marginBottom: '1em',
        'td,th': {
          padding: '0.5em',
          background: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
        },
        thead: {
          th: {
            background: 'brand.300',
            color: 'white',
            borderColor: 'white',
          },
        },
      },
      blockquote: {
        borderLeft: '5px solid',
        borderColor: 'gray.500',
        padding: '1em',
        background: 'gray.50',
        marginBottom: '1em',
        blockquote: {
          marginBottom: '0',
        },
      },
      dl: {
        dt: {
          fontWeight: 'bold',
        },
        dd: {
          paddingLeft: '1em',
        },
      },
    },
  },
});
