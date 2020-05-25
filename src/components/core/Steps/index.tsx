/** @jsx jsx */
import { jsx, Text, SxStyleProp } from 'theme-ui';
import { FC } from 'react';

interface IStepsProps {
  current: number;
  sx?: SxStyleProp;
}

export const Steps: FC<IStepsProps> = ({ children, sx }) => {
  return <div sx={{ display: 'flex', ...sx }}>{children}</div>;
};

interface IStepProps {
  step?: number;
  title?: string;
  description?: string;
}

export const Step: FC<IStepProps> = ({ step = 1, title, description }) => {
  return (
    <div sx={{ flex: 1, pr: 3 }}>
      <div sx={{ display: 'flex', alignItems: 'flex-start', overflow: 'hidden' }}>
        <div
          sx={{
            borderRadius: 'full',
            border: '1px solid',
            width: '32px',
            height: '32px',
            lineHeight: '30px',
            textAlign: 'center',
            mr: 3,
          }}
        >
          {step}
        </div>
        <div>
          {title && (
            <Text
              sx={{
                pr: 2,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  backgroundColor: 'primary',
                  position: 'absolute',
                  top: '16px',
                  left: '100%',
                  display: 'block',
                  width: '9999px',
                  height: '1px',
                  content: '""',
                },
              }}
            >
              {title}
            </Text>
          )}
          {description && <Text sx={{ fontSize: 0 }}>{description}</Text>}
        </div>
      </div>
    </div>
  );
};
