import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Components
import logo from '../../assets/img/logo.png';
import BurgerIcon from '../../assets/svg/BurgerIcon';
import Sidebar from '../../components/Nav/Sidebar';
import Backdrop from '../../components/Elements/Backdrop';
import PrivacyPolicy from '../Sections/PrivacyPolicy';

const Img = styled.img`
  width: 60px;
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 80px;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  h1 {
    margin-left: 15px;
    color: #0b093b;
  }
  li > a {
    padding: 10px 15px;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;



const BurgerMenu = styled.button`
  display: none;
  @media (max-width: 760px) {
    display: block;
    border: none;
    outline: none;
    background: none;
  }
`;

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate" style={y > 100 ? { backgroundColor: 'white' } : {}}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <Img src={logo} alt="logo" className="" />
            <h1 className="font20 extraBold">Hydroyal</h1>
          </Link>
          <BurgerMenu className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurgerMenu>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={-80}>
                About Us
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="team" spy={true} smooth={true} offset={-80}>
                Team
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80}>
                Our Product
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="highlights" spy={true} smooth={true} offset={-80}>
                Hylights
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <PrivacyPolicy />
            </li>
            {/* <li>
              <a href="https://www.fuelcellstore.com/product/product&product_id=2043" target="_blank" rel={'noreferrer'}>
                <CTAButton>
                  <ShoppingCart width={24} height={24} />
                  Buy Now
                </CTAButton>
              </a>
            </li> */}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}
