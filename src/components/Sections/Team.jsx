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

const Wrapper = styled.div``;

const Title = styled.h1`
  text-align: center;
  margin: 100px auto auto 0;
  font-size: 50px;
  color: #272c60;
`;


export default function Model1() {
  return (
    <Wrapper>
      <Title>Responsive "Meet The Team" Section</Title>
      <p>Resize the browser window to see the effect.</p>
      <br />

      <div class='row'>
        <div class='column'>
          <div class='card'>
            <img src={Contact1} alt='Jane' style='width:100%' />
            <div class='container'>
              <h2>Jane Doe</h2>
              <p class='title'>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button class='button'>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class='column'>
          <div class='card'>
            <img src={Contact1} alt='Mike' style='width:100%' />
            <div class='container'>
              <h2>Mike Ross</h2>
              <p class='title'>Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button class='button'>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class='column'>
          <div class='card'>
            <img src={Contact1} alt='John' style='width:100%' />
            <div class='container'>
              <h2>John Doe</h2>
              <p class='title'>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button class='button'>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
