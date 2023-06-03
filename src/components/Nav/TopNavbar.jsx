import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Components
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';
// Assets
import logo from '../../assets/img/logo.png';
import BurgerIcon from '../../assets/svg/BurgerIcon';

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
    color: #0b093b;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
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
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {/* {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />} */}
      <Wrapper
        className='flexCenter animate'
        style={y > 100 ? { backgroundColor: 'white' } : {}}
      >
        <NavInner className='container flexSpaceCenter'>
          <Link className='pointer flexNullCenter' to='home' smooth={true}>
            <Img src={logo} alt='logo' className='' />
            <h1 style={{ marginLeft: '15px' }} className='font20 extraBold'>
              Hydroyal
            </h1>
          </Link>
          {/* <BurderWrapper
            className='pointer'
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper> */}
          <UlWrapperRight className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='home'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='team'
                spy={true}
                smooth={true}
                offset={-80}
              >
                About Us
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='projects'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Products
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='blog'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Blog
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='contact'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}
