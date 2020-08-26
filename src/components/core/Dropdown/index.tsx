/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { FC, createContext, useState, useContext } from 'react';

const defaultValue = { isOpen: false };
const DropdownContext = createContext(defaultValue);

const useDropdown = () => {
  return useContext(DropdownContext);
};

interface IDropdownProps {
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  isOpen?: boolean;
}

export const Dropdown: FC<IDropdownProps> = ({ closeOnBlur = true, closeOnSelect = true, isOpen, children }) => {
  const [state, setState] = useState(defaultValue);

  return (
    <DropdownContext.Provider value={state}>
      <Box>{children}</Box>
    </DropdownContext.Provider>
  );
};

export const DropdownButton: FC<BoxProps> = (props) => {
  const state = useDropdown();

  return <Box {...props} />;
};

export const DropdownList: FC<BoxProps> = (props) => {
  const { isOpen } = useDropdown();

  return <Box style={{ display: isOpen ? 'block' : 'none' }} {...props} />;
};

export const DropdownItem: FC<BoxProps> = (props) => {
  return <Box {...props} />;
};
