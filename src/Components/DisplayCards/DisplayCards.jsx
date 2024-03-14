import React from 'react';
import Styles from './DisplayCards.module.css';
import giraffe from '../../assets/images/giraffe.png';
import stream from '../../assets/images/stream.png';
import boat from '../../assets/images/boat.png';

const cards = [
  {
    image: giraffe,
    title: 'Akagera National Park',
    description:
      'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
  },
  {
    image: stream,
    title: 'Bisoke Hike',
    description:
      'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
  },
  {
    image: boat,
    title: 'Lake Kivu trip',
    description:
      'A trip to Lake Kivu can be a truly unique and memorable experience.',
  },
];

const card = [
  {
    image: giraffe,
    title: 'Akagera National Park',
    description:
      'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
  },
  {
    image: stream,
    title: 'Bisoke Hike',
    description:
      'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
  },
  {
    image: boat,
    title: 'Lake Kivu trip',
    description:
      'A trip to Lake Kivu can be a truly unique and memorable experience.',
  },
];

export default function DisplayCards() {
  return (
    <section>
      <div className={Styles.Heading__title}>
        <h3>Choose your Package</h3>
        <h4>
          Select your Best Package <br /> for your Travel
        </h4>
      </div>
      <div className={Styles.Cards__display}>
        {cards.map((Card) => (
          <div className={Styles.Card}>
            <img src={Card.image} alt="cards" />
            <h5>{Card.title}</h5>
            <div className={Styles.Button__space}>
              <p>{Card.description}</p>
              <button className={Styles.LearnMore__btn} type="submit">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.Cards__display}>
        {card.map((Card) => (
          <div className={Styles.Card}>
            <img src={Card.image} alt="cards" />
            <h5>{Card.title}</h5>
            <div className={Styles.Button__space}>
              <p>{Card.description}</p>
              <button className={Styles.LearnMore__btn} type="submit">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
