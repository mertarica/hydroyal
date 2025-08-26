import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import logo from '../../assets/img/logo.png';
import CloseIcon from '../../assets/svg/CloseIcon';


const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${props => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const Img = styled.img`
  width: 80px;
  margin: auto auto 20px;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;

const UlStyle = styled.ul`
  padding: 0 40px 40px;
  li {
    margin: 20px 0;
    a {
      padding: 10px 15px;
    }
  }
`;



export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate greenBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <Img src={logo} alt="logo" />
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About Us
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="team"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Team
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Our Product
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="highlights"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Hylights
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Career textClass="whiteColor" />
        </li> */}
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <a href="https://www.fuelcellstore.com/product/product&product_id=2043" target="_blank" rel={'noreferrer'}>
            <CTAButton>
              <ShoppingCart width={24} height={24} />
              Buy Now
            </CTAButton>
          </a>
        </li> */}
      </UlStyle>
    </Wrapper>
  );
}
