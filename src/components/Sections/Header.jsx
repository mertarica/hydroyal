import React from 'react';
import styled from 'styled-components';
// Components
import Twitter from '../../assets/svg/SocialMedia/Twitter';
import Linkedin from '../../assets/svg/SocialMedia/Linkedin';
import Youtube from '../../assets/svg/SocialMedia/Youtube';
import BgImage from '../../assets/img/bg.png';

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeaderWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-top: 100px;
  height: 100%;
  text-align: right;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  font-size: 28px;
  font-weight: 400;
  padding: 15px 0 50px 0;
  line-height: 2rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const SocialMediaWrapper = styled.div`
  margin-left: auto;
  margin-bottom: 100px;
  text-align: right;
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 960px) {
    margin: 0 0 0 auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 1.5rem;
`;

const BgImg = styled.img`
  position: absolute;
  z-index: -1;
  object-fit: fill;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export default function Header() {
  return (
    <Wrapper id='home' className='container flex'>
      <BgImg src={BgImage} />
      <HeaderWrapper>
        <div>
          <h1 className='extraBold font60'>
            Accelerating the transition to green hydrogen
          </h1>
          <HeaderP className='font13 semiBold'>
            We produce membrane electrode assembly for water electrolysis
          </HeaderP>
        </div>
      </HeaderWrapper>
      <SocialMediaWrapper>
        We're on
        <ButtonWrapper>
          <a
            href='https://twitter.com/HydroyalAB'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>
          <a
            href='https://www.youtube.com/channel/UCrCT8XDOnXE7EtDYdA0o7SA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Youtube />
          </a>
          <a
            href='https://www.linkedin.com/company/hydroyal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Linkedin />
          </a>
        </ButtonWrapper>
      </SocialMediaWrapper>
    </Wrapper>
  );
}
