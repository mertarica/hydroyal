import React from 'react';
import styled from 'styled-components';
import UsageImage from '../../assets/img/projects/usage.png';

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(#fff, #c9f89d);
`;
const HeaderInfo = styled.div`
  > h1 {
    margin: 2rem 0 3rem;
    text-align: center;
  }
  @media (max-width: 860px) {
    text-align: center;
    > h1 {
      margin: 1rem 0;
    }
  }
`;

const FrameWrapper = styled.div`
  overflow: hidden;
  width: 560px;
  height: 315px;
  position: relative;
  > iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 8px;
  }

  @media (max-width: 860px) {
    text-align: center;
    margin-top: 24px;
    width: 90%;
    height: 230px;
  }
`;

const VideoLeftWrapper = styled.div`
  width: calc(100% - 560px);
  @media (max-width: 860px) {
    width: 90%;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
      text-align: left;
    }
  }
`;

const Advertising = styled.div`
  position: relative;
  padding-bottom: 50px;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 60%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 90%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 40%;
  @media (max-width: 860px) {
    width: 90%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 10% 0 0;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1190px) {
    padding: 70px 0 0 0;
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      <div id="aboutus" className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">What Is Hydroyal?</h1>
        </HeaderInfo>
        <Advertising className="flexSpaceCenter">
          <AddLeft>
            <AddLeftInner>
              <ImgWrapper className="flexCenter">
                <img className="radius8" src={UsageImage} alt="add" />
              </ImgWrapper>
            </AddLeftInner>
          </AddLeft>
          <AddRight>
            <p className="font25">
              Hydroyal is a pioneer in large-scale MEA production for Alkaline Electrolysis and Anion Exchange Membrane
              Electrolysis, with eco-friendly and sustainable materials.
            </p>
          </AddRight>
        </Advertising>

        <HeaderInfo>
          <h1 className="font40 extraBold">Green Hydrogen</h1>
        </HeaderInfo>
        <Advertising className="flexSpaceCenter">
          <VideoLeftWrapper>
            <p className="font25">
              Green hydrogen is a clean and renewable energy carrier that is produced by using renewable sources of electricity to
              split water molecules into hydrogen and oxygen. It holds promise as a versatile and carbon-free fuel for various
              sectors, including transportation, industry, and energy storage.
            </p>
          </VideoLeftWrapper>
          <FrameWrapper>
            <iframe
              src={`https://www.youtube.com/embed/ZsZlacupkr4?playlist=ZsZlacupkr4&loop=1&controls=0&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              title={'title'}
            />
          </FrameWrapper>
        </Advertising>
      </div>
    </Wrapper>
  );
}
