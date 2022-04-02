import {
  Box,
  Flex,
  Text,
  Textarea,
  useDisclosure,
  Link,
  HStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { Header } from '../components/header';
import { SaveModal } from '../components/save_modal';
import { putMemo } from '../indexeddb/memos';
import { SaveButton } from '../components/save_button';
import { Link as ReachLink } from 'react-router-dom';
import { DownloadIcon } from '@chakra-ui/icons';
import ConvertMarkdownWorker from 'worker-loader!../worker/convert_markdown_worker';
const convertMarkdownWorker = new ConvertMarkdownWorker();
const { useState, useEffect } = React;
interface Props {
  text: string;
  setText: (text: string) => void;
}
export const Editor: React.FC<Props> = (props) => {
  const { text, setText } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [html, setHtml] = useState('');
  useEffect(() => {
    convertMarkdownWorker.onmessage = (event) => {
      setHtml(event.data.html);
    };
  }, []);

  useEffect(() => {
    convertMarkdownWorker.postMessage(text);
  }, [text]);
  return (
    <>
      <Header title={'Markdown Editor'}>
        <HStack spacing='4'>
          <SaveButton onClick={onOpen}>
            保存する
            <DownloadIcon w={4} h={4} ml='1' />
          </SaveButton>
          <Text>
            <Link as={ReachLink} to='/history' color='white'>
              履歴を見る
            </Link>
          </Text>
        </HStack>
      </Header>
      <Flex
        pos='fixed'
        paddingTop='14'
        w='100vw'
        h='100vh'
        zIndex={1}
        bg='brand.100'
      >
        <Box w='50vw' borderRight='1px'>
          <Textarea
            placeholder='Markdown'
            height='100%'
            variant='flushed'
            p='3'
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </Box>
        <Box w='50vw' p='3' overflowY='auto'>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </Flex>
      <SaveModal
        onSave={(title: string) => {
          putMemo(title, text);
        }}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
