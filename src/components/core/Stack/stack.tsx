import { forwardRef } from 'react';
import { BoxProps } from 'theme-ui';

const createSpace = (direction: Direction, space: number) => {
  if (direction === 'column') {
    return {
      marginBottom: space,
      marginRight: 0,
    };
  }

  return {
    marginBottom: 0,
    marginRight: space,
  };
};

type Direction = 'row' | 'column';

interface IStackProps extends BoxProps {
  space: number;
  direction?: Direction;
  inline?: boolean;
  justify?: string;
  align?: string;
}

export const Stack = forwardRef<HTMLDivElement, IStackProps>(function Stack(
  { space = 2, direction = 'row', inline = false, justify = 'normal', align = 'normal', children, ...props },
  ref,
) {
  // eslint-disable-next-line
  const styles: any = {
    display: inline ? 'inline-flex' : 'flex',
    width: '100%',
    justifyContent: justify,
    alignItems: align,
  };

  if (Array.isArray(direction)) {
    styles.flexDirection = direction.map((d) => d);
    styles['> *:not(:last-child)'] = direction.map((d) => createSpace(d, space));
  } else {
    styles.flexDirection = direction;
    styles['> *:not(:last-child)'] = createSpace(direction, space);
  }

  return (
    <div ref={ref} {...props} css={styles}>
      {children}
    </div>
  );
});
