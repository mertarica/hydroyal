import React from 'react';
import styled from 'styled-components';
// Components
import ProjectBox from '../Elements/ProjectBox';
// Assets
import MessImg from '../../assets/img/projects/mess_production.jpg';
import ProjectImg2 from '../../assets/img/projects/2.png';
import ProjectImg3 from '../../assets/img/projects/3.png';
import ManufacturingProcess from '../../assets/img/projects/manufacturing_process.jpg';

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(#c9f89d, #c9f89d, #fff, #fff);
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
  margin: 100px 0 0;
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
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 90%;
    text-align: center;
    h2 {
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
    width: 90%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    left: 0;
  }
  > p {
    line-height: 1.75rem;
    sup {
      font-size: x-small;
      vertical-align: super;
    }
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
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
          <h1 className='font40 extraBold'>Our Product</h1>
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
              img={MessImg}
              title='Mass production'
              text='We produce the key component of electrolyzers, MEAs, in a large scale.'
              // action={() => {alert('clicked')}}
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
      <div className='container'>
        <Advertising className='flexSpaceCenter'>
          <AddLeft>
            <AddLeftInner>
              <h4 className='font15 semiBold'>
                A bit more details about our manufacturing process
              </h4>
              <h2 className='font40 extraBold'>CCM by Hydroyal</h2>
              <p className='font20'>
                Hydroyal is the only MEA provider for AEMWE in the world
                bringing the PGM-free catalysts and membrane together with its
                unique and patent-pending technique. Thanks to the technique and
                experiences in electrode engineering, catalysts with sizes from
                nm to µm can be coated on the membrane and catalyst coated
                membrane (CCM) can be obtained. The MEA size varies between
                5-200 cm<sup>2</sup> corresponding to the hydrogen production
                capacity of 10-400 W and can be operated with 0.1 M to 2 M KOH
                electrolyte at 55-60 °C.
              </p>
            </AddLeftInner>
          </AddLeft>
          <AddRight>
            <ImgWrapper className='flexCenter'>
              <img className='radius8' src={ManufacturingProcess} alt='add' />
            </ImgWrapper>
          </AddRight>
        </Advertising>
      </div>
    </Wrapper>
  );
}
