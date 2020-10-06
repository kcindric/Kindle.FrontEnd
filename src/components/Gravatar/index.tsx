import { FC, forwardRef } from 'react';
import { Avatar, AvatarProps } from '@chakra-ui/core';
import md5 from 'md5';

interface IGravatarProps extends Omit<AvatarProps, 'src' | 'ref'> {
  email?: string;
  fallbackImage?:
    | '404'
    | 'mp'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'robohash'
    | 'blank'
    | string
    | null
    | undefined;
}

export const Gravatar: FC<IGravatarProps> = forwardRef<HTMLImageElement, IGravatarProps>(function Gravatar(
  { email, fallbackImage = 'mp', ...rest },
  ref,
) {
  const defaultImageQueryParam = fallbackImage ? `?d=${fallbackImage}` : '';
  const formattedEmail = ('' + email).trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  const src = `https://www.gravatar.com/avatar/${hash}${defaultImageQueryParam}`;

  return <Avatar ref={ref} {...rest} src={src} />;
});
