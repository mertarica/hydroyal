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
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #555;
`;

const Location = styled.p`
  font-size: 1.2em;
  margin-bottom: 1em;
  color: #777;
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

const ApplyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
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
export default function Career({ textClass = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link className={textClass ? textClass : "" } onClick={() => setIsOpen(true)}>Career</Link>
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
              <Title>Business Developer</Title>
              <Subtitle>Applications are considered on a rolling basis</Subtitle>
              <Location>Stockholm | Remote</Location>
              <ApplyButton
                href="https://emp.jobylon.com/jobs/241177-hydroyal-business-developer/"
                target="_blank"
                className="mb-2"
              >
                I'm interested
              </ApplyButton>
              <Description>
                Are you driven by the challenge of revolutionizing sustainable energy solutions? Do you want to be part of a
                cutting-edge startup that is paving the way for the future of green hydrogen technology? Join us in producing
                next-generation electrodes for electrolyzers and play a crucial role in transforming the global energy landscape.
                Become a key player in our dynamic team and help us lead the charge toward a cleaner, greener future!
              </Description>
              <Description>
                As a Business Developer, you will play a pivotal role in driving our growth and establishing our presence in the
                green hydrogen market. You will leverage your expertise and industry experience to identify new business
                opportunities, forge strategic partnerships, and support the commercialization of our products and services.
              </Description>
              <SectionTitle>Key Responsibilities:</SectionTitle>
              <List>
                <ListItem>
                  Business Strategy: Develop and implement business development strategies to achieve growth objectives and expand
                  our market presence.
                </ListItem>
                <ListItem>
                  Partnerships: Identify, negotiate, and manage strategic partnerships and alliances with key stakeholders,
                  including industry players, government bodies, and research institutions.
                </ListItem>
                <ListItem>Sales & Marketing: Develop effective go-to-market strategies.</ListItem>
                <ListItem>
                  Technical Liaison: Serve as a bridge between the technical team and potential clients, translating complex
                  technical information into clear business propositions.
                </ListItem>
                <ListItem>
                  Proposal Development: Prepare and present business proposals, pitches, and presentations to potential clients
                  and partners.
                </ListItem>
              </List>
              <SectionTitle>About Us:</SectionTitle>
              <Description>
                We are a dynamic startup at the forefront of green hydrogen production, driven by a strong technical and academic
                foundation. Our mission is to revolutionize the energy sector by providing sustainable and innovative hydrogen
                solutions. As we expand, we are seeking a highly motivated Business Developer with an engineering background and
                experience in the energy sector, preferably in hydrogen, to join our team.
              </Description>
              <SectionTitle>What We Offer:</SectionTitle>
              <List>
                <ListItem>
                  We offer a decent salary and equity in the company. Your engagement level will be influenced by traction,
                  customer interest, and funding, but we anticipate you will initially dedicate at least 50% of your time, with
                  the potential to increase to full-time later. However, based on the candidate's profile, the level of
                  involvement, operational tasks, and incentives can be adjusted to suit everyone's best interests.
                </ListItem>
                <ListItem>
                  Ownership Opportunity: Equity ownership in the company, providing a unique opportunity to share in our success.
                </ListItem>
                <ListItem>
                  Professional Growth: Opportunity to work with a pioneering team in a cutting-edge industry, with ample
                  opportunities for professional development and career advancement.
                </ListItem>
                <ListItem>
                  Impact: Play a key role in shaping the future of sustainable energy and making a tangible impact on the
                  environment.
                </ListItem>
              </List>
              <SectionTitle>Skills & Requirements</SectionTitle>
              <List>
                <ListItem>
                  Educational Background: Bachelor’s or Master’s degree in Engineering (Chemical, Mechanical, Electrical, or
                  related fields preferred).
                </ListItem>
                <ListItem>
                  Experience: Minimum of 5 years of experience in the energy sector, with a strong preference for experience in
                  the hydrogen industry.
                </ListItem>
                <ListItem>
                  Technical Knowledge: Deep understanding of hydrogen production technologies, market dynamics, and regulatory
                  landscape.
                </ListItem>
                <ListItem>
                  Business Acumen: Proven track record of developing and executing successful business development strategies in
                  the energy sector.
                </ListItem>
                <ListItem>
                  Communication Skills: Excellent verbal and written communication skills, with the ability to present complex
                  technical concepts to a non-technical audience. Fluency in English is required.
                </ListItem>
                <ListItem>
                  Interpersonal Skills: Ability to build and maintain strong relationships with internal and external
                  stakeholders.
                </ListItem>
                <ListItem>
                  Entrepreneurial Mindset: Self-starter with a proactive approach, capable of working in a fast-paced startup
                  environment.
                </ListItem>
                <ListItem>
                  Travel: Willingness to travel as required to meet with partners, clients, and attend industry events.
                </ListItem>
              </List>
              <SectionTitle>About Company</SectionTitle>
              <Description>
                We are a dynamic startup specializing in large-scale MEA production for Alkaline Electrolysis and Anion Exchange
                Membrane Electrolysis, with eco-friendly and sustainable materials.
              </Description>
              <Contact>Melike Babucci | Contact Person</Contact>
              <ApplyButton href="mailto:melike.babucci@hydroyal.com">Send e-mail</ApplyButton>
            </Container>
          </DialogContent>
        </DialogOverlay>
      )}
    </>
  );
}
