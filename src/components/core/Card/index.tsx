/** @jsx jsx */
import { jsx, Box, BoxProps, useColorMode } from '@chakra-ui/core';
import { FC } from 'react';
import { mode } from '@chakra-ui/theme-tools';

interface ICardProps extends BoxProps {}

export const Card: FC<ICardProps> = ({ sx, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      sx={{
        bg: mode('white', 'gray.800')({ colorMode }),
        border: '1px',
        borderColor: mode('gray.200', 'gray.700')({ colorMode }),
        borderRadius: 'lg',
        p: 3,
        ...sx,
      }}
      {...rest}
    />
  );
};
