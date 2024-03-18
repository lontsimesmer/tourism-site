import React from 'react';
import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import Styles from './NavBar.module.css';
import logo from '../../assets/images/logo.png';

export default function NavBar() {
  return (
    <div className={Styles.NavBar}>
      <div className={Styles.NavBar__Content}>
        <div className={Styles.NavBar__section1}>
          <img src={logo} alt="logo" />
          <div className={Styles.NavBar_attributs}>
            <span className={Styles.line} />
            <Link to="home">Home</Link>
            <a href="about">About</a>
            <a href="tour-package">Tour package</a>
            <a href="gallery">Gallery</a>
            <a href="blog">Blog</a>
            <a href="contact">Contact</a>
          </div>
        </div>
        <div className={Styles.NavBar__section2}>
          <span className={Styles.Magnifying_glass}>
            <GrSearch
              style={{ color: '#fff', cursor: 'pointer', fontSize: '18px' }}
            />
          </span>
          <button className={Styles.signButton} type="submit">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
