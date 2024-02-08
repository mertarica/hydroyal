import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import logo from '../../assets/img/logo.png';
import CloseIcon from '../../assets/svg/CloseIcon';
import ShoppingCart from '../../assets/svg/ShoppingCart';

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

const CTAButton = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  border-radius: 25px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background-color: #027200;
  height: 48px;
  &:hover {
    background-color: #1db954;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  svg {
    color: #027200;
    background-color: #fff;
    border-radius: 50%;
    padding: 2px;
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
