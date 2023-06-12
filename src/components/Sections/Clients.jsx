import React from 'react';
import styled from 'styled-components';
// Assets
import Almi from '../../assets/img/clients/almi.svg';
import StockholmMaterialHub from '../../assets/img/clients/smhub.png';
import KTH from '../../assets/img/clients/kth.png';

const Wrapper = styled.section`
  width: 100%;
  > h1 {
    font-size: 3rem;
    text-align: center;
    padding: 1.5rem 0 1rem;
  }
  > div {
    gap: 5rem;
  }
`;

const LogoWrapper = styled.div`
  width: 33%;
  margin-top: auto;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  width: 100%;
`;

export default function ClientSlider() {
  return (
    <Wrapper>
      <h1>Partners</h1>
      <div className='container flex flexRow'>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={KTH} alt='KTH logo' />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={StockholmMaterialHub} alt='Stockholm Material Hub Logo' />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={Almi} alt='Almi logo' />
        </LogoWrapper>
      </div>
    </Wrapper>
  );
}
