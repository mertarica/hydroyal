import React from 'react';
import styled from 'styled-components';
// Assets
import Almi from '../../assets/img/clients/almi.svg';
import StockholmMaterialHub from '../../assets/img/clients/smhub.png';
import KTH from '../../assets/img/clients/kth.png';

const Wrapper = styled.section`
  width: 100%;
  > h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    padding: 1.5rem 0 1rem;
  }
  > div {
    gap: 5rem;
  }
  .container {
    display: flex;
    flex-direction: row;

    @media (max-width: 860px) {
      flex-direction: column;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 33%;
  @media (max-width: 860px) {
    width: 80%;
    margin: auto;
  }
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
      <div className='container'>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={KTH} alt='KTH logo' />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle
            src={StockholmMaterialHub}
            alt='Stockholm Material Hub Logo'
          />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <ImgStyle src={Almi} alt='Almi logo' />
        </LogoWrapper>
      </div>
    </Wrapper>
  );
}
