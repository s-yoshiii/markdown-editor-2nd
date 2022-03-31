import * as React from 'react';
import { Button } from '@chakra-ui/react';
interface Props {
  children: React.ReactNode;
  onClick: () => void;
}
export const SaveButton: React.FC<Props> = (props) => {
  const { onClick, children } = props;
  return (
    <Button
      bg='brand.200'
      color='white'
      _hover={{ bg: 'brand.300' }}
      outline='0'
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
