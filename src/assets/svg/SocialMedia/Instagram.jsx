import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width='36'
      height='35'
      viewBox='0 0 36 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M25.5818 0H10.9168C4.54677 0 0.749268 3.7975 0.749268 10.1675V24.815C0.749268 31.2025 4.54677 35 10.9168 35H25.5643C31.9343 35 35.7318 31.2025 35.7318 24.8325V10.1675C35.7493 3.7975 31.9518 0 25.5818 0ZM18.2493 24.29C14.5043 24.29 11.4593 21.245 11.4593 17.5C11.4593 13.755 14.5043 10.71 18.2493 10.71C21.9943 10.71 25.0393 13.755 25.0393 17.5C25.0393 21.245 21.9943 24.29 18.2493 24.29ZM28.6093 8.54C28.5218 8.75 28.3993 8.9425 28.2418 9.1175C28.0668 9.275 27.8743 9.3975 27.6643 9.485C27.4543 9.5725 27.2268 9.625 26.9993 9.625C26.5268 9.625 26.0893 9.45 25.7568 9.1175C25.5993 8.9425 25.4768 8.75 25.3893 8.54C25.3018 8.33 25.2493 8.1025 25.2493 7.875C25.2493 7.6475 25.3018 7.42 25.3893 7.21C25.4768 6.9825 25.5993 6.8075 25.7568 6.6325C26.1593 6.23 26.7718 6.0375 27.3318 6.16C27.4543 6.1775 27.5593 6.2125 27.6643 6.265C27.7693 6.3 27.8743 6.3525 27.9793 6.4225C28.0668 6.475 28.1543 6.5625 28.2418 6.6325C28.3993 6.8075 28.5218 6.9825 28.6093 7.21C28.6968 7.42 28.7493 7.6475 28.7493 7.875C28.7493 8.1025 28.6968 8.33 28.6093 8.54Z'
        fill='#024129'
      />
    </svg>
  );
}

export default SvgComponent;