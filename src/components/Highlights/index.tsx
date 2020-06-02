/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

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
    </>
  );
};
