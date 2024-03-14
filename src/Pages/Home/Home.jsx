import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from './NavBar/NavBar';
import DisplayCards from '../../Components/DisplayCards/DisplayCards';
import PageImage from './PageImage/PageImage';
import MovingCards from './MovingCards/MovingCards';
import Testimony from './Testimony/Testimony';
import Footer from '../../Components/Footer/Footer';

export default function Home () {
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
  )
}
