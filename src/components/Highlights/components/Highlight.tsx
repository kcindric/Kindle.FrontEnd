/** @jsx jsx */
import { jsx } from '@chakra-ui/core';
import { FC } from 'react';

interface IHighlightProps {}

export const Highlight: FC<IHighlightProps> = () => {
  return <div sx={{ color: 'yellow' }}>test</div>;
};
