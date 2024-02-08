import React from 'react';
import styled from 'styled-components';
// Assets
import Almi from '../../assets/img/clients/almi.svg';
import StockholmMaterialHub from '../../assets/img/clients/smhub.png';
import KTH from '../../assets/img/clients/kth.png';
import RMA from '../../assets/img/clients/RMA.png';
import Vinnova from '../../assets/img/clients/vinnova.png';
import Sting from '../../assets/img/clients/sting.png';

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
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 860px) {
      flex-direction: column;
    }
  }
  .width-50 {
    width: 50%;

    @media (max-width: 860px) {
      width: 100%;
    }
  }
`;

const LogoWrapper = styled.div`
  width: calc(33% - 5rem);
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
      <div className="container">
        <LogoWrapper className="flexCenter">
          <ImgStyle src={KTH} alt="KTH logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={StockholmMaterialHub} alt="Stockholm Material Hub Logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Almi} alt="Almi logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter width-50">
          <ImgStyle src={RMA} alt="RMA logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Vinnova} alt="Vinnova logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <a href="https://www.sting.co/companies/hydroyal-ab" rel="noreferrer" target="_blank">
            <ImgStyle src={Sting} alt="Sting logo" />
          </a>
        </LogoWrapper>
      </div>
    </Wrapper>
  );
}
