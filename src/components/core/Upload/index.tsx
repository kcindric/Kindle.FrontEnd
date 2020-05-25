/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useCallback, FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { Text, Styled } from 'theme-ui';

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
        <Text as={Styled.p}>Drop the files here ...</Text>
      ) : (
        <Text as={Styled.p}>Drag 'n' drop some files here, or click to select files</Text>
      )}
    </div>
  );
};
