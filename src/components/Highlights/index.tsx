/** @jsx jsx */
import { jsx, Text } from '@chakra-ui/core';
import { FC } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

interface IHighlightsProps {
  items: Array<any>;
}

export const Highlights: FC<IHighlightsProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          {item.authorTitle}
          <div>
            <mark>{item.content}</mark>
          </div>
        </div>
      ))}

      <Text>Diff viewer:</Text>
      <ReactDiffViewer
        oldValue="This is an old highlight."
        newValue="This is an old highlight. But with additional content."
        splitView={false}
        hideLineNumbers
      />
    </>
  );
};
