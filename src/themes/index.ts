import { extendTheme } from '@chakra-ui/core';

import Button from './components/button';
import Menu from './components/menu';
import shadows from './foundations/shadows';

export const theme = extendTheme({
  shadows,
  components: {
    Button,
    Menu,
  },
});
