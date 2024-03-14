import React from 'react';
import Styles from './FlexCards.module.css';
import line2 from '../../../assets/images/line2.png';

export default function FlexCards() {
  return (
    <section>
      <p className={Styles.Page__Heading}>Welcome to Africa Wizzy Safari</p>
      <div className={Styles.Heading__line}>
        <img src={line2} alt="line" />
      </div>
    </section>
  );
}
