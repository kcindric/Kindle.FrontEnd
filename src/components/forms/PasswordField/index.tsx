/** @jsx jsx */
import { jsx, InputGroup, Input, Button, InputRightElement, InputProps } from '@chakra-ui/core';
import { useState, forwardRef } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export const PasswordInput = forwardRef<any, InputProps>(function PasswordInput(props, ref) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input ref={ref} pr="4.5rem" {...props} type={show ? 'text' : 'password'} type={show ? 'text' : 'password'} />
      <InputRightElement width="4.5rem" pr="0">
        <Button variant="ghost" type="button" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
});
