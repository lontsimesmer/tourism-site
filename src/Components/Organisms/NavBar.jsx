import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { Attribut } from '../Atoms/Atom';
import logo from '../../assets/images/logo.png';

const Navbar = styled.section`
  height: 105px;
`;

const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 95%;
`;

const NavSection1 = styled('div')`
  align-items: center;
  display: flex;
  gap: 50px;
`;

const NavAttribut = styled('div')`
  align-items: center;
  display: flex;
  font-family: Mulish;
  gap: 25px;
`;

const Line = styled.span`
  border: 2px solid #304f47;
  height: 0;
  position: absolute;
  top: 13.5%;
  width: 44px;
`;

const NavSection2 = styled('div')`
  align-items: center;
  display: flex;
  gap: 45px;
`;

const Search = styled(ImSearch)`
  color: #fff;
  cursor: pointer;
  font-size: 20px;

  :hover {
    color: #9a9ab0;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background: #c7923e;
  border: 1px solid #304f47;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-family: Mulish;
  font-size: 16px;
  font-weight: 500;
  height: 51px;
  letter-spacing: 0.5px;
  padding: 11px 24px;
  position: relative;
  right: 10%;
  width: 160px;
`;

export default function NavBar() {
  return (
    <Navbar>
      <NavContent>
        <NavSection1>
          <img src={logo} alt="logo" />
          <NavAttribut>
            <Line />
            <Link
              style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 500,
                opacity: 0.7,
                textDecoration: 'none',
              }}
              to="home"
            >
              Home
            </Link>
            <Attribut href="about">About</Attribut>
            <Attribut href="tour-package">Tour package</Attribut>
            <Attribut href="gallery">Gallery</Attribut>
            <Attribut href="blog">Blog</Attribut>
            <Attribut href="contact">Contact</Attribut>
          </NavAttribut>
        </NavSection1>
        <NavSection2>
          <Search />
          <Button>Sign In</Button>
        </NavSection2>
      </NavContent>
    </Navbar>
  );
}
