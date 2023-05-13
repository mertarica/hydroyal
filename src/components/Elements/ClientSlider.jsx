import React from 'react';
import styled from 'styled-components';
// Assets
import StockholmMaterialHub from '../../assets/img/clients/client01.png';
import KTH from '../../assets/img/clients/client02.png';
import Almi from '../../assets/img/clients/client03.png';

const Wrapper = styled.div`
  > h1 {
    font-size: 3rem;
    text-align: center;
    padding: 1.5rem 0 1rem;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const ImgStyle = styled.img`
  height: 100px;
  padding: 1rem;
`;

export default function ClientSlider() {
  return (
    <Wrapper>
      <h1>Partners</h1>
      <div className='flex flexRow'>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={StockholmMaterialHub} alt='client logo' />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={KTH} alt='client logo' />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={Almi} alt='client logo' />
        </LogoWrapper>
      </div>
    </Wrapper>
  );
}
