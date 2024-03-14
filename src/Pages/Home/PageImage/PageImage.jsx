import React from 'react';
import Styles from './PageImage.module.css'
import search from '../../../assets/images/search.png';
import forward from '../../../assets/images/forward.png';
import back from '../../../assets/images/back.png';
import guest from '../../../assets/images/guest.png';
import date from '../../../assets/images/date.png';
import sort from '../../../assets/images/sort.png';

export default function PageImage() {
  return (
    <section className={Styles.Page__image}>
      <div className={Styles.Image__text}>
        <h1>Experience the beauty of Rwanda with us</h1>
        <h2>Discover the Land of a Thousand Hills</h2>
      </div>
      <div className={Styles.Arrow__icons}>
        <div>
          <img src={forward} alt="arrow" />
        </div>
        <div>
          <img src={back} alt="arrow" />
        </div>
      </div>
      <div className={Styles.Horizontal__bar}>
        <input placeholder='Search activities or Destinations' className={Styles.PageImage__input} type='text' />
        <div className={Styles.search__icon}>
          <img src={search} alt="search" />
        </div>
        <div className={Styles.Bar__text}>
          <div>
            <img src={guest} alt="guest" />
          </div>
          <div>
            <img src={date} alt="date" />
          </div>
          <div>
            <img src={sort} alt="sort" />
          </div>
        </div>
        <button className={Styles.Booknow__btn}>Book Now</button>
      </div>
    </section>
  )
}
