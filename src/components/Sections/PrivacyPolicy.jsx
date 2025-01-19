import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../../assets/img/logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  a {
    color: rgb(11, 9, 59);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 60px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #555;
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #444;
  margin-bottom: 1em;
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  margin: 1em 0;
  color: #333;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;
`;

const Contact = styled.p`
  font-size: 1em;
  margin-top: 1em;
  color: #333;
`;

// Dialog Styles
const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background: white;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

const CloseIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url('data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    no-repeat center center;
  background-size: contain;
`;

// Career Component
export default function PrivacyPolicy({ textClass = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link className={textClass ? textClass : ""} onClick={() => setIsOpen(true)}>
        Privacy Policy
      </Link>
      {isOpen && (
        <DialogOverlay>
          <DialogContent>
            <CloseButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </CloseButton>
            <HeaderWrapper>
              <Link className="pointer flexNullCenter" to="/" smooth={true}>
                <Img src={logo} alt="logo" className="" />
                <h1 className="font20 extraBold">Hydroyal</h1>
              </Link>
            </HeaderWrapper>
            <Container>
              <Title>Privacy Policy</Title>
              <Subtitle>Hydroyal AB</Subtitle>
              <Description>
                This privacy policy ("policy") will help you understand how Hydroyal AB ("us", "we", "our") uses and protects the data you provide to us when you visit and use http://hydroyal.com ("website", "service").
              </Description>
              <Description>
                We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page. This privacy policy was last updated on 18th November 2024.
              </Description>

              <SectionTitle>What Data We Collect</SectionTitle>
              <Description>When you visit the website, we may collect the following data:</Description>
              <List>
                <ListItem>Your IP address.</ListItem>
                <ListItem>Your contact information and email address.</ListItem>
                <ListItem>Other information such as interests and preferences.</ListItem>
                <ListItem>Data profile regarding your online behavior on our website.</ListItem>
              </List>

              <SectionTitle>Why We Collect Your Data</SectionTitle>
              <Description>We are collecting your data for several reasons:</Description>
              <List>
                <ListItem>To better understand your needs.</ListItem>
                <ListItem>To improve our services and products.</ListItem>
                <ListItem>To send you promotional emails containing the information we think you will find interesting.</ListItem>
                <ListItem>To contact you to fill out surveys and participate in other types of market research.</ListItem>
                <ListItem>To customize our website according to your online behavior and personal preferences.</ListItem>
              </List>

              <SectionTitle>Safeguarding and Securing the Data</SectionTitle>
              <Description>
                Hydroyal AB is committed to securing your data and keeping it confidential. Hydroyal AB has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
              </Description>

              <SectionTitle>Our Cookie Policy</SectionTitle>
              <Description>
                Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit). The data we collect by using cookies is used to customize our website to your needs.
              </Description>

              <SectionTitle>What types of cookies we are using?</SectionTitle>
              <List>
                <ListItem>
                  <strong>Functionality</strong> – Our company uses these cookies to identify you when visiting our website and to remember your previously selected preferences. These cookies might include information about your chosen language and location you are in. A mix of first-party and third-party cookies are used.
                </ListItem>
                <ListItem>
                  <strong>Advertising</strong> – Our company uses these cookies to collect information about your visit to our website, the content you viewed, then links you followed and information about your browser, device and your IP address. This information can sometimes be shared with third-parties for advertising purposes.
                </ListItem>
              </List>

              <SectionTitle>Links to Other Websites</SectionTitle>
              <Description>
                Our website contains links that lead to other websites. If you click on these links Hydroyal AB is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
              </Description>

              <SectionTitle>How To Contact Us</SectionTitle>
              <Description>
                In case you have any questions about Our company's privacy policy, the data we hold of you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.
              </Description>
              <Contact>Email: info@hydroyal.com</Contact>
              <Contact>Mail Address: Hagalundsgatan 32, Solna, Stockholm, Sweden</Contact>
            </Container>
          </DialogContent>
        </DialogOverlay>
      )}
    </>
  );
}
