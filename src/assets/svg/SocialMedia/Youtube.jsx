import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width='45'
      height='35'
      viewBox='0 0 45 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M33.5444 0H11.6694C5.10693 0 0.731934 4.375 0.731934 10.9375V24.0625C0.731934 30.625 5.10693 35 11.6694 35H33.5444C40.1069 35 44.4819 30.625 44.4819 24.0625V10.9375C44.4819 4.375 40.1069 0 33.5444 0ZM26.7413 19.7531L21.3382 22.9906C19.1507 24.3031 17.3569 23.2969 17.3569 20.7375V14.2406C17.3569 11.6813 19.1507 10.675 21.3382 11.9875L26.7413 15.225C28.8194 16.4937 28.8194 18.5063 26.7413 19.7531Z'
        fill='#024129'
      />
    </svg>
  );
}

export default SvgComponent;
