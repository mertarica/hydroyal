import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import LogoImg from '../../assets/img/logo.png';

const Wrapper = styled.div`
  width: 100%;
  color: #0b093b;
  background: #fff;
  a {
    color: #0b093b;
  }
`;
const InnerWrapper = styled.div`
  padding: 15px 0;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
const Image = styled.img`
  width: 32px;
  margin-right: 8px;
`;

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className='container lightBold'>
        <InnerWrapper className='flexSpaceCenter'>
          <Link
            className='flexCenter animate pointer'
            to='home'
            smooth={true}
            offset={-80}
          >
            <Image src={LogoImg} alt='logo' />
            Hydroyal
          </Link>
          <StyleP className='font13'>
            Copyright © {getCurrentYear()} Hydroyal - Med ensamrätt
          </StyleP>

          <Link
            className=' animate pointer font13'
            to='home'
            smooth={true}
            offset={-80}
          >
            Back to top
          </Link>
        </InnerWrapper>
      </div>
    </Wrapper>
  );
}
