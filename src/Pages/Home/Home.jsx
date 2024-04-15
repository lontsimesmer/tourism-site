import React from 'react';
import StickyBar from '../../Components/Organisms/StickyBar';
import NavBar from '../../Components/Organisms/NavBar';
import DisplayCards from '../../Components/Templates/DisplayCards/DisplayCards';
import PageImage from './PageImage/PageImage';
import MovingCards from './MovingCards/MovingCards';
import Testimony from './Testimony/Testimony';
import Footer from '../../Components/Templates/Footer/Footer';

export default function Home() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <PageImage />
      <DisplayCards />
      <MovingCards />
      <Testimony />
      <Footer />
    </div>
  );
}
