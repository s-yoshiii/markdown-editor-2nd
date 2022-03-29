import { Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SaveButton } from './save_button';
interface Props {
  title: string;
  children: React.ReactNode;
}
export const Header: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <Flex
      p={[4, 2]}
      pos='fixed'
      top='0'
      left='0'
      zIndex={2}
      w='100%'
      bg='brand.400'
      h='14'
    >
      <Heading as='h1' size='lg' color='white'>
        {title}
      </Heading>
      <Spacer />
      {children}
    </Flex>
  );
};
