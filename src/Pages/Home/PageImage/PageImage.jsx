import React from 'react';
import styled from 'styled-components';
import { Heading1, Heading4 } from '../../../Components/Atoms/Atom';
import Styles from './PageImage.module.css';
import search from '../../../assets/images/search.png';
import forward from '../../../assets/images/forward.png';
import back from '../../../assets/images/back.png';
import guest from '../../../assets/images/guest.png';
import date from '../../../assets/images/date.png';
import sort from '../../../assets/images/sort.png';
// import background from '../../../assets/images/nature10.png';
import Carousel from '../../../Components/ImageSlider';

const ImageText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  left: 10%;
  position: absolute;
  top: 55%;
  width: 35%;
`;

const images = [
  'https://cdn.rhinoafrica.com/tmp/image-thumbnails/media/_en/destinations/root/africa/east-africa/rwanda/lake-kivu/_img/image-thumb__4846__background-cover/lake-kivu-rwanda-jpg.jpg',
  'https://www.safarisrwandasafari.com/wp-content/uploads/2023/03/lake-kivu-rwanda.jpg',
  'https://rwandaecocompany.com/wp-content/uploads/2022/05/boat-at-lake-kivu.jpg',
];

export default function PageImage() {
  return (
    <section className={Styles.PageImage}>
      <Carousel images={images} />
      <ImageText>
        <Heading1 style={{ fontSize: 62 }}>
          Experience the beauty of Rwanda with us
        </Heading1>
        <Heading4 style={{ fontSize: 20, marginTop: -40 }}>
          Discover the Land of a Thousand Hills
        </Heading4>
      </ImageText>
      <div className={Styles.Arrow__icons}>
        <div>
          <img src={forward} alt="arrow" />
        </div>
        <div>
          <img src={back} alt="arrow" />
        </div>
      </div>
      <div className={Styles.Horizontal__bar}>
        <input
          placeholder="Search activities or Destinations"
          className={Styles.PageImage__input}
          type="text"
        />
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
        <button className={Styles.Booknow__btn} type="submit">
          Book Now
        </button>
      </div>
    </section>
  );
}
