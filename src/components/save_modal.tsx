import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import * as React from 'react';
import { getDate } from '../utils';
const { useState } = React;
interface Props {
  onSave: (title: string) => void;
  isOpen: boolean;
  onClose: () => void;
}
export const SaveModal: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(getDate());
  const { onSave, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>テキストの内容を保存します。</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          保存内容のタイトルを入力して「保存」ボタンを押してください。
          <Input
            mt={2}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            variant='outline'
            borderColor='brand.400'
            color='brand.400'
            mr={4}
            onClick={onClose}
          >
            キャンセル
          </Button>
          <Button
            bg='brand.400'
            color='white'
            onClick={() => {
              onSave(title);
              onClose();
            }}
          >
            保存
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
