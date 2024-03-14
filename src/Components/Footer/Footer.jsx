import React from 'react';
import Styles from './Footer.module.css';
import envelop from '../../assets/images/envelop.png';
import logo from '../../assets/images/logo.png';
import socialicons from '../../assets/images/socialicons.png';

export default function Footer() {
  return (
    <section className={Styles.Footer__component}>
      <div className={Styles.Left__footer}>
        <p className={Styles.Footer__title}>
          If you have any question, Let us help you!
        </p>
        <p className={Styles.Footer__status}>
          If you have any questions or would like to book a tour with us, please
          don&apos;t hesitate to contact us.
        </p>
        <p className={Styles.Footer__address}>
          <div>Phone: +250 788 123 456</div>
          <div>Email: info@rwandatourism.com</div>
          <div>Address: Kigali, Rwanda</div>
        </p>
        <p className={Styles.Footer__subscrib}>Subscribe to our newspaper</p>
        <div className={Styles.Input__area}>
          <input
            type="text"
            placeholder="Input your email here"
            className={Styles.Footer__input}
          />
          <img src={envelop} alt="envelop" />
        </div>
      </div>
      <div className={Styles.Right__footer}>
        <div className={Styles.Footer__logoIcons}>
          <div className={Styles.Footer__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={Styles.Footer__icons}>
            <img src={socialicons} alt="social" />
          </div>
        </div>
        <p className={Styles.lorem}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={Styles.Footer__columns}>
          <div className={Styles.paragraphs}>
            Home Testimonials Destinations signinn
          </div>
          <div className={Styles.paragraphs}>
            About Us Packages Events Gallery
          </div>
          <div className={Styles.paragraph}>Our Team Blog Contact Us</div>
        </div>
      </div>
      <div className={Styles.Footer__licence}>
        Copyright Africa Wizzy Safari 2022
      </div>
    </section>
  );
}
