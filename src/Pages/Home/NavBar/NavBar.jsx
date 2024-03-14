import React from 'react';
import Styles from './NavBar.module.css'
import logo from '../../../assets/images/logo.png'
import line1 from '../../../assets/images/line1.png';
import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <section className={Styles.NavBar}>
      <div className={Styles.NavBar__logo}>
        <img src={logo} alt='logo'></img>
      </div>
      <div className={Styles.NavBar__line}>
        <img src={line1} alt="line" />
      </div>
      <div className={Styles.NavBar__attributs}>
        <a href='home'>Home</a>
        <Link to='about'>About</Link>
        <a href='tour-package'>Tour package</a>
        <a href='gallery'>Gallery</a>
        <a href='blog'>Blog</a>
        <a href='contact'>Contact</a>
      </div>
      <button>Sign In</button>
    </section>
  );
}
