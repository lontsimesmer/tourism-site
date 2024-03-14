import React from 'react';
import Styles from './StickyBar.module.css';
import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';
import icons from '../../assets/images/icons.png';

export default function StickyBar() {
  return (
    <section className={Styles.stickyBar}>
      {/* <div className={Styles.mainContainer}> */}
      {/* <div className={Styles.stickyBar__content}> */}
      <div className={Styles.StickyBar__logo}>
        <img src={phone} alt="phone" />
        <span className={Styles.Icons__name}>+250 784 688 641</span>
        <img src={mail} alt="mail" />
        <span className={Styles.Icons__name}>bbonteemma@gmail.com</span>
      </div>
      {/* </div> */}
      <div className={Styles.StickyBar__icons}>
        <img src={icons} alt="icons" />
      </div>
      {/* </div> */}
    </section>
  );
}
