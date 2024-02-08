import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={22} viewBox="0 0 28 22" {...props}>
      <path data-name="Line 5" stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M1 1h26" />
      <path data-name="Line 6" stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M1 11h26" />
      <path data-name="Line 7" stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M1 21h26" />
    </svg>
  );
}

export default SvgComponent;
