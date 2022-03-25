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
            isReadOnly
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={4} onClick={onClose}>
            Close
          </Button>
          <Button
            variant='ghost'
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
