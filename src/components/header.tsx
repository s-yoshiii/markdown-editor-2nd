import { Heading } from '@chakra-ui/react';
import * as React from 'react';
export const Header: React.FC = () => {
  return (
    <Heading
      as='h1'
      size='lg'
      p={[4, 2]}
      position='fixed'
      top={0}
      left={0}
      w='100%'
      bg='brand.400'
      h='14'
      color='white'
    >
      MarkDown Editor
    </Heading>
  );
};
