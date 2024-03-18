import React from 'react';
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import Styles from './StickyBar.module.css';

export default function StickyBar() {
  return (
    <div className={Styles.StickyBar}>
      <div className={Styles.StickyBar__logo}>
        <AiFillPhone
          style={{ color: '#fff', cursor: 'pointer', fontSize: 28 }}
        />
        <span className={Styles.Icon_name}>+250 784 688 641</span>
        <AiFillMail
          style={{ color: '#fff', cursor: 'pointer', fontSize: 28 }}
        />
        <span className={Styles.Icon_name}>bbonteemma@gmail.com</span>
      </div>
      <div className={Styles.StickyBar__icons}>
        <div className={Styles.Circle_icons}>
          <BiLogoFacebook style={{ color: '#fff', cursor: 'pointer' }} />
        </div>
        <div className={Styles.Circle_icons}>
          <AiOutlineTwitter style={{ color: '#fff', cursor: 'pointer' }} />
        </div>
        <div className={Styles.Circle_icons}>
          <BiLogoLinkedin style={{ color: '#fff', cursor: 'pointer' }} />
        </div>
        <div className={Styles.Circle_icons}>
          <AiFillInstagram style={{ color: '#fff', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}
