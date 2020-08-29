/** @jsx jsx */
import { jsx } from '@chakra-ui/core';
import { useCallback, FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Text } from '@chakra-ui/core';

export const Upload: FC = () => {
  const onDrop = useCallback((_acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      sx={{
        display: 'flex',
        minHeight: '200px',
        p: 2,
        border: '2px dashed',
        borderColor: 'gray.4',
        bg: 'gray.2',
        borderRadius: 'default',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Drop the files here ...</Text>
      ) : (
        <Text>Drag 'n' drop some files here, or click to select files</Text>
      )}
    </div>
  );
};
