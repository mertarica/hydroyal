import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width="800px" height="800px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.51528 10.307L5.89028 15.307C6.01993 17.3655 7.71485 18.9758 9.77728 19H15.2293C17.2921 18.9763 18.9876 17.3659 19.1173 15.307L19.4923 10.307C19.5889 9.21028 19.2245 8.12286 18.4867 7.30572C17.7488 6.48858 16.7041 6.01549 15.6033 6H9.40328C8.3026 6.01577 7.25816 6.48898 6.52054 7.30608C5.78293 8.12319 5.41871 9.21045 5.51528 10.307Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5033 10C15.5033 11.0718 14.9315 12.0622 14.0033 12.5981C13.0751 13.134 11.9315 13.134 11.0033 12.5981C10.0751 12.0622 9.5033 11.0718 9.5033 10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
