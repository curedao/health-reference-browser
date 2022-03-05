import React from 'react';
import type { FC } from 'react';
import { environment } from 'src/config';

interface LogoProps {
  type?: string; // 'logo', 'logo_with_text'
  height?: number;
  defaultimg?: boolean;
  [key: string]: any;
}

const Logo: FC<LogoProps> = ({classname, type, height, size, defaultimg, ...rest }) => {
  return (
    <img
      alt="Logo"
      src={environment.path_logo}
      height={`40px`}
      {...rest}
    />
  );
}

export default Logo;
