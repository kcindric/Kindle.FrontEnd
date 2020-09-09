import { extendTheme } from '@chakra-ui/core';

import Button from './components/buttons';
import shadows from './foundations/shadows';

export const theme = extendTheme({
  shadows,
  components: {
    Button,
  },
});
