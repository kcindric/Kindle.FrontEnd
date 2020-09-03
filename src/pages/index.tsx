import { Button } from '@chakra-ui/core';
import { useWizard } from 'react-wizard-primitive';

import { MainLayout } from 'components/layouts/MainLayout';
import { Upload } from 'components/core/Upload';
import { Steps, Step } from 'components/core/Steps';
import { Highlights } from '../components/Highlights';

import highlights from '../data/highlights.json';
import { Card } from '../components/core/Card';

export default function Home() {
  const wizard = useWizard();
  const step1 = wizard.getStep();
  const step2 = wizard.getStep();

  return (
    <MainLayout>
      <Card overflow="hidden">
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
      </Card>
    </MainLayout>
  );
}
