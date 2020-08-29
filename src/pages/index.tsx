import { Box, Button } from '@chakra-ui/core';
import { useWizard } from 'react-wizard-primitive';

import { MainLayout } from 'components/layouts/MainLayout';
import { Upload } from 'components/core/Upload';
import { Steps, Step } from 'components/core/Steps';
import { Highlights } from '../components/Highlights';
// import useUser from '../libs/useUser';

import highlights from '../data/highlights.json';
import { IUser } from '../interfaces/IUser';

export default function Home() {
  // const { user } = useUser({ redirectTo: `${process.env.linkPrefix}/login` });
  const wizard = useWizard();
  const step1 = wizard.getStep();
  const step2 = wizard.getStep();
  const user: IUser = {
    email: 'mock',
    userId: '',
    username: '',
  };

  return (
    <MainLayout isLoading={!user} user={user}>
      <Box p={3} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
        <Steps current={wizard.activeStepIndex} sx={{ mb: 4, mt: 3 }}>
          <Step title="Upload" description="Upload your highlights.txt file." />
          <Step title="Finish" description="This is a description." />
        </Steps>
        {step1.isActive && (
          <>
            <Upload />
            <Button colorScheme="yellow" mt={3} onClick={wizard.nextStep}>
              Submit
            </Button>
          </>
        )}
        {step2.isActive && (
          <>
            <Highlights items={highlights} />
            <Button colorScheme="yellow" mt={3} onClick={wizard.previousStep}>
              Finish
            </Button>
          </>
        )}
      </Box>
    </MainLayout>
  );
}
