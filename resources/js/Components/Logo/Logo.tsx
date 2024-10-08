import React from 'react';

interface LogoProps extends React.HTMLProps<HTMLImageElement> {
  width?: string;
  height?: string;
}


export default function Logo(props: LogoProps) {
  return (
    <img
      src={"/sf_logo.png"}
      alt="SF Logo"
      width={props.width || '100'}
      height={props.height || '100'}
      {...props}
    />
  );
}
