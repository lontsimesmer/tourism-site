import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from '../Atoms/Icons';
import { GroupIcons } from '../Molecules';

const TopBar = styled.section`
  align-items: center;
  background: #304f47;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 100px;
`;

const IconText = styled.div`
  align-items: flex-start;
  display: flex;
  float: left;
  gap: 10px;
  margin: 10px;
`;

const Contact = styled.span`
  color: #fff;
  font-family: 'Podkova';
  font-size: 12px;
  padding-top: 5px;
  position: relative;
  right: 2%;
`;

const Circle = styled('div')`
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50px;
  display: flex;
  height: 23px;
  justify-content: center;
  width: 23px;
`;

export default function StickyBar() {
  return (
    <TopBar>
      <IconText>
        <Phone />
        <Contact>+250 784 688 641</Contact>
        <Mail />
        <Contact>bbonteemma@gmail.com</Contact>
      </IconText>
      <GroupIcons>
        <Circle>
          <Facebook />
        </Circle>
        <Circle>
          <Twitter />
        </Circle>
        <Circle>
          <Linkedin />
        </Circle>
        <Circle>
          <Instagram />
        </Circle>
      </GroupIcons>
    </TopBar>
  );
}
