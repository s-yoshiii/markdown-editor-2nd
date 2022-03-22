import { Heading } from '@chakra-ui/react';
import * as React from 'react';

export const Header: React.FC = () => {
  return (
    <Heading as='h1' size='lg' color='white'>
      MarkDown Editor
    </Heading>
  );
};
