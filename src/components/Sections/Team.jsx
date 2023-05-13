import React from 'react';
import styled from 'styled-components';
import Contact1 from '../../assets/img/contact-1.png';
// import './Model1.css';
// import Member1 from '../Assets/Member1.jpg';
// import Member2 from '../Assets/Member2.jpg';
// import Member3 from '../Assets/Member3.png';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PinterestIcon from '@mui/icons-material/Pinterest';

const Wrapper = styled.section`
  background: linear-gradient(#fff, #c9f89d, #fff);
  width: 100%;
`;

const InnerWrapper = styled.section`
  max-width: 1220px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export default function Model1() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Responsive "Meet The Team" Section</Title>
        <p>Resize the browser window to see the effect.</p>
        <br />

        <div className='row'>
          <div className='column'>
            <div className='card'>
              <img src={Contact1} alt='Jane' />
              <div className='container'>
                <h2>Jane Doe</h2>
                <p className='title'>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={Contact1} alt='Mike' />
              <div className='container'>
                <h2>Mike Ross</h2>
                <p className='title'>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={Contact1} alt='John' />
              <div className='container'>
                <h2>John Doe</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
