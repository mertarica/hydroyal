import React from 'react';
import styled from 'styled-components';
// Assets
import BurakProfile from '../../assets/img/team/burak.jpg';
import MelikeProfile from '../../assets/img/team/melike.jpg';
import LindberghProfile from '../../assets/img/team/lindbergh.jpg';
import MatteoProfile from '../../assets/img/team/matteo.jpg';
import SchemaImage from '../../assets/img/projects/schema.jpg';

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

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  .item:hover .thumb::after {
    opacity: 0.7;
  }

  .single-item {
    margin-bottom: 30px;

    @media (max-width: 860px) {
      width: 90%;
      margin: 25px auto;
    }
  }

  .item .thumb {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .item .thumb::after {
    background: #232323 none repeat scroll 0 0;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.35s ease-in-out;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    width: 100%;
  }

  .item .thumb .overlay {
    top: -100%;
    left: 0;
    padding: 20px;
    position: absolute;
    text-align: center;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    width: 100%;
    z-index: 1;
  }

  .item:hover .thumb .overlay {
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  .item .thumb .overlay p {
    color: #ffffff;
  }

  .item .thumb .overlay h4 {
    color: #ffffff;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
  }

  .item .thumb img {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    width: 100%;
    height: 380px;
    object-fit: cover;
    object-position: top;
  }

  .item:hover .thumb img {
    opacity: 0.6;
  }

  .item .thumb .social li {
    display: inline-block;
  }

  .item .thumb .social li a {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #ffffff;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin: 0 2px;
    text-align: center;
    width: 40px;
  }

  .info {
    background: #ffffff none repeat scroll 0 0;
    -moz-box-shadow: 0 0 10px #cccccc;
    -webkit-box-shadow: 0 0 10px #cccccc;
    -o-box-shadow: 0 0 10px #cccccc;
    box-shadow: 0 0 10px #cccccc;
    padding: 40px 20px 20px;
    position: relative;
    text-align: center;
    z-index: 9;
  }

  .info .message {
    height: 50px;
    line-height: 40px;
    margin-left: -25px;
    margin-top: -25px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 50px;
  }

  .info .message a {
    background: #fff none repeat scroll 0 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-box-shadow: 0 0 10px #cccccc;
    -webkit-box-shadow: 0 0 10px #cccccc;
    -o-box-shadow: 0 0 10px #cccccc;
    box-shadow: 0 0 10px #cccccc;
    box-sizing: border-box;
    color: #ff5a6e;
    display: inline-block;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    width: 50px;
  }

  .info .message a i {
    font-weight: 500;
  }

  .info h4 {
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  .info span {
    color: #ff5a6e;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }

  .social li.twitter a {
    background-color: #00b6f1;
  }

  .social li.facebook a {
    background-color: #3b5998;
  }

  .social li.google-plus a {
    background-color: #df4a32;
  }

  .social li.vimeo a {
    background-color: #1ab7ea;
  }

  .social li.instagram a {
    background-color: #cd486b;
  }

  .social li.linkedin a {
    background-color: #0e76a8;
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
      <div id='aboutus' className='container'>
        <HeaderInfo>
          <h1 className='font40 extraBold'>What Is Hydroyal?</h1>
        </HeaderInfo>
        <Advertising className='flexSpaceCenter'>
          <AddLeft>
            <AddLeftInner>
              <ImgWrapper className='flexCenter'>
                <img className='radius8' src={SchemaImage} alt='add' />
              </ImgWrapper>
            </AddLeftInner>
          </AddLeft>
          <AddRight>
            <p className='font25'>
              Hydroyal is a pioneer in large-scale MEA production for Alkaline
              Electrolysis and Anion Exchange Membrane Electrolysis, with
              eco-friendly and sustainable materials.
            </p>
          </AddRight>
        </Advertising>

        <HeaderInfo>
          <h1 className='font40 extraBold'>Green Hydrogen</h1>
        </HeaderInfo>
        <Advertising className='flexSpaceCenter'>
          <VideoLeftWrapper>
            <p className='font25'>
              Green hydrogen is a clean and renewable energy carrier that is
              produced by using renewable sources of electricity to split water
              molecules into hydrogen and oxygen. It holds promise as a
              versatile and carbon-free fuel for various sectors, including
              transportation, industry, and energy storage.
            </p>
          </VideoLeftWrapper>
          <FrameWrapper>
            <iframe
              src={`https://www.youtube.com/embed/ZsZlacupkr4?autoplay=1&playlist=ZsZlacupkr4&loop=1&controls=0&rel=0`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
              allowFullScreen
              title={'title'}
            />
          </FrameWrapper>
        </Advertising>
      </div>
      <div id='team' className='container'>
        <HeaderInfo>
          <h1 className='font40 extraBold'>Meet The Team</h1>
        </HeaderInfo>

        <TeamWrapper className='team-area row team-items'>
          <div className='col-md-4 single-item'>
            <div className='item'>
              <div className='thumb'>
                <img className='img-fluid' src={BurakProfile} alt='Thumb' />
                <div className='overlay'>
                  <h4>Burak Koyutürk</h4>
                  <p>
                    Burak is chemical engineer in the Division of Applied
                    Electrochemistry at KTH.
                  </p>
                  <div className='social'>
                    <ul>
                      <li className='linkedin'>
                        <a href='https://www.linkedin.com/in/burak-koyuturk/'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </li>
                      <li className='google-plus'>
                        <a href='https://scholar.google.se/citations?user=qEMtu-IAAAAJ&hl=tr&oi=ao'>
                          <i className='fab fa-google'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='info'>
                <span className='message'>
                  <a href='mailto:burak@hydroyal.com'>
                    <i className='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Burak Koyutürk, PhD</h4>
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div className='col-md-4 single-item'>
            <div className='item'>
              <div className='thumb'>
                <img className='img-fluid' src={MelikeProfile} alt='Thumb' />
                <div className='overlay'>
                  <h4>Melike Babucci</h4>
                  <p>
                    Melike is chemical engineer in the Department of Materials
                    Science and Engineering at Uppsala University.
                  </p>
                  <div className='social'>
                    <ul>
                      <li className='linkedin'>
                        <a href='https://www.linkedin.com/in/melikebabucci/'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </li>
                      <li className='google-plus'>
                        <a href='https://scholar.google.se/citations?user=ce6v9hMAAAAJ&hl=tr&oi=ao'>
                          <i className='fab fa-google'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='info'>
                <span className='message'>
                  <a href='mailto:melike@hydroyal.com'>
                    <i className='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Melike Babucci, PhD</h4>
                <span>COO</span>
              </div>
            </div>
          </div>
          <div className='col-md-4 single-item'>
            <div className='item'>
              <div className='thumb'>
                <img className='img-fluid' src={MatteoProfile} alt='Thumb' />
                <div className='overlay'>
                  <h4>Matteo Rossini</h4>
                  <p>
                    Matteo is chemical engineer in the Division of Applied
                    Electrochemistry at KTH.
                  </p>
                  <div className='social'>
                    <ul>
                      <li className='linkedin'>
                        <a href='https://www.linkedin.com/in/matteo-rossini-6032bb182/'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='info'>
                <span className='message'>
                  <a href='mailto:matteo@hydroyal.com'>
                    <i className='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Matteo Rossini, MSc</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>
        </TeamWrapper>
        <HeaderInfo>
          <h1 className='font40 extraBold'>Advisory Board</h1>
        </HeaderInfo>

        <TeamWrapper className='team-area row team-items'>
          <div className='col-md-4 single-item'>
            <div className='item'>
              <div className='thumb'>
                <img className='img-fluid' src={LindberghProfile} alt='Thumb' />
                <div className='overlay'>
                  <h4>Professor Göran Lindbergh</h4>
                  <p>Head of Division of Applied Electrochemistry at KTH</p>
                </div>
              </div>
              <div className='info'>
                <span className='message'>
                  <a href='mailto:gnli@kth.se'>
                    <i className='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Professor Göran Lindbergh</h4>
                <span>Advisor</span>
              </div>
            </div>
          </div>
        </TeamWrapper>
      </div>
    </Wrapper>
  );
}
