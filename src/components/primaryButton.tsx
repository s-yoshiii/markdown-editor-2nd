import * as React from 'react';
import { Button } from '@chakra-ui/react';
interface Props {
  children: string;
  onClick: () => void;
}
export const PrimaryButton: React.FC<Props> = (props) => (
  <Button
    bg='brand.200'
    color='white'
    _hover={{ bg: 'brand.300' }}
    outline='0'
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
