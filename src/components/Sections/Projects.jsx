import React from 'react';
import styled from 'styled-components';
// Components
import ProjectBox from '../Elements/ProjectBox';
import FullButton from '../Buttons/FullButton';
// Assets
import ProjectImg1 from '../../assets/img/projects/1.png';
import ProjectImg2 from '../../assets/img/projects/2.png';
import ProjectImg3 from '../../assets/img/projects/3.png';
import AddImage2 from '../../assets/img/add/add2.png';

const Wrapper = styled.section`
  width: 100%;
  background: #c9f89d;
`;
const HeaderInfo = styled.div`
  > h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
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
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
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
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

export default function Projects() {
  return (
    <Wrapper id='projects'>
      <div className='container'>
        <HeaderInfo>
          <h1 className='font40 extraBold'>Our Products</h1>
          <p className='font20'>
            Water electrolysis is a critical technology for green hydrogen
            production. There is urgency of establishing GW-scale electrolyzers
            (700 GW by 2030) to supply the world’s energy demand. Yet, a
            bottleneck is scalable production of electrolyzer components.
            <br />
            <br />
            In Hydroyal, we manufacture the key component of electrolyzers,
            membrane electrode assembly (MEA), in large-scale. Our unique MEA is
            composed of eco-friendly and inexpensive materials and improves
            stack efficiency with high hydrogen purity and electrolyzer-friendly
            conditions (low KOH concentration).
          </p>
        </HeaderInfo>
        <div className='row textCenter'>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <ProjectBox
              img={ProjectImg1}
              title='Mass production'
              text='We produce the key component of electrolyzers, MEAs, in a large scale.'
              action={() => alert('clicked')}
            />
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <ProjectBox
              img={ProjectImg2}
              title='≈10 times lower KOH'
              text='Alkaline and AEM electrolyzers can operate with Hydroyal MEA with 5% KOH concentration.'
              action={() => alert('clicked')}
            />
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <ProjectBox
              img={ProjectImg3}
              title='High hydrogen purity'
              text='Our unique product can help produce high purity hydrogen'
              action={() => alert('clicked')}
            />
          </div>
        </div>
      </div>
      <div className='whiteBg'>
        <div className='container'>
          <Advertising className='flexSpaceCenter'>
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className='flexCenter'>
                  <img className='radius8' src={AddImage2} alt='add' />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className='font15 semiBold'>A few words about company</h4>
              <h2 className='font40 extraBold'>A Study of Creativity</h2>
              <p className='font12'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <ButtonsRow
                className='flexNullCenter'
                style={{ margin: '30px 0' }}
              >
                <div style={{ width: '190px' }}>
                  <FullButton
                    title='Get Started'
                    action={() => alert('clicked')}
                  />
                </div>
                <div style={{ width: '190px', marginLeft: '15px' }}>
                  <FullButton
                    title='Contact Us'
                    action={() => alert('clicked')}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}
