import React from 'react';
import styled from 'styled-components';
// Assets
import BurakProfile from '../../assets/img/team/burak.jpg';
import MelikeProfile from '../../assets/img/team/melike.jpg';
import AliProfile from '../../assets/img/team/ali.jpg';
import SchemaImage from '../../assets/img/projects/schema.jpg';

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(#fff, #c9f89d);
`;
const HeaderInfo = styled.div`
  > h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  .item:hover .thumb::after {
    opacity: 0.7;
  }

  .single-item {
    margin-bottom: 30px;
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
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 75px 0 100px;
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
  width: 60%;
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
  width: 40%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -180px;
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
  padding: 0 10% 0 0;
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
    <Wrapper id='team'>
      <div className='container'>
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
              Electrolysis, and Anion Exchange Membrane Electrolysis, with
              eco-friendly and sustainable materials.
            </p>
          </AddRight>
        </Advertising>

        <HeaderInfo>
          <h1 className='font40 extraBold'>Meet The Team</h1>
        </HeaderInfo>

        <TeamWrapper class='team-area row team-items'>
          <div class='col-md-4 single-item'>
            <div class='item'>
              <div class='thumb'>
                <img class='img-fluid' src={BurakProfile} alt='Thumb' />
                <div class='overlay'>
                  <h4>Burak Koyutürk</h4>
                  <p>
                    Burak is a chemical engineer in the Division of Applied
                    Electrochemistry at KTH.
                  </p>
                  <div class='social'>
                    <ul>
                      <li class='twitter'>
                        <a href='#'>
                          <i class='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li class='instagram'>
                        <a href='#'>
                          <i class='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li class='vimeo'>
                        <a href='#'>
                          <i class='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class='info'>
                <span class='message'>
                  <a href='mailto:burakkoyuturk@hydroyal.com'>
                    <i class='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Burak Koyutürk, PhD</h4>
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div class='col-md-4 single-item'>
            <div class='item'>
              <div class='thumb'>
                <img class='img-fluid' src={MelikeProfile} alt='Thumb' />
                <div class='overlay'>
                  <h4>Melike Babucci</h4>
                  <p>
                    Melike is a chemical engineer in the Department of Materials
                    Science and Engineering at Uppsala University.
                  </p>
                  <div class='social'>
                    <ul>
                      <li class='twitter'>
                        <a href='#'>
                          <i class='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li class='instagram'>
                        <a href='#'>
                          <i class='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li class='vimeo'>
                        <a href='#'>
                          <i class='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class='info'>
                <span class='message'>
                  <a href='mailto:burakkoyuturk@hydroyal.com'>
                    <i class='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Melike Babucci, PhD</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>
          <div class='col-md-4 single-item'>
            <div class='item'>
              <div class='thumb'>
                <img class='img-fluid' src={AliProfile} alt='Thumb' />
                <div class='overlay'>
                  <h4>Ali Başol</h4>
                  <p>
                    Ali is a business developer with a background in
                    international business development and finance.
                  </p>
                  <div class='social'>
                    <ul>
                      <li class='twitter'>
                        <a href='#'>
                          <i class='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li class='instagram'>
                        <a href='#'>
                          <i class='fab fa-instagram'></i>
                        </a>
                      </li>
                      <li class='vimeo'>
                        <a href='#'>
                          <i class='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class='info'>
                <span class='message'>
                  <a href='mailto:burakkoyuturk@hydroyal.com'>
                    <i class='fas fa-envelope-open'></i>
                  </a>
                </span>
                <h4>Ali Basol, MBA</h4>
                <span>CFO</span>
              </div>
            </div>
          </div>
        </TeamWrapper>
      </div>
    </Wrapper>
  );
}
