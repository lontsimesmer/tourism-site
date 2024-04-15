import React from 'react';
import Styles from './CardText.module.css';
import monkey from '../../../assets/images/monkey.png';
import adult from '../../../assets/images/adult.png';
import period from '../../../assets/images/period.png';
import room from '../../../assets/images/room.png';

export default function CardText() {
  return (
    <div className={Styles.Monkey__Cards}>
      <img src={monkey} alt="monkeys" />
      <p className={Styles.About__expirience}>
        We are dedicated to providing the best travel experience.
      </p>
      <p className={Styles.Land__description}>
        Discover the Land of a Thousand Hills
      </p>
      <div className={Styles.Horizontal__barre}>
        <div className={Styles.Barre__text}>
          <div>
            <img src={adult} alt="adult" />
          </div>
          <div className={Styles.Date}>
            <img src={period} alt="period" />
          </div>
          <div className={Styles.Package}>
            <img src={room} alt="room" />
          </div>
        </div>
        <button className={Styles.Booknow__bttn} type="submit">
          Book Now
        </button>
      </div>
    </div>
  );
}
