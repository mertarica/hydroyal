import React from 'react';
// Sections
import TopNavbar from '../components/Nav/TopNavbar';
import Header from '../components/Sections/Header';
import Team from '../components/Sections/Team';
import Projects from '../components/Sections/Projects';
import Charts from '../components/Sections/Charts';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Clients from '../components/Sections/Clients';
import Highlights from '../components/Sections/Highlights';

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Team />
      <Projects />
      <Charts />
      <Highlights />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
