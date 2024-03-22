import React from 'react';
import StickyBar from '../../Components/Organisms/StickyBar';
import CardText from './CardText/CardText';
import NavBar from '../../Components/Organisms/NavBar';
import FlexCards from './FlexCards/FlexCards';
import Footer from '../../Components/Templates/Footer/Footer';

export default function AboutUs() {
  return (
    <div>
      <StickyBar />
      <CardText />
      <NavBar />
      <FlexCards />
      <Footer />
    </div>
  );
}
