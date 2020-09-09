import { mode, transparentize } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

function variantIcon(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
}

const sizes = {
  md: {
    h: 10,
    minW: 10,
    fontSize: 'md',
    px: 3,
  },
};

export default {
  baseStyle: {
    borderRadius: 'full',
  },
  variants: {
    icon: variantIcon,
  },
  sizes,
};
