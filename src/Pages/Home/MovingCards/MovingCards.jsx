import React from "react";
import Styles from "./MovingCards.module.css";
import Bttn from '../../../assets/images/Bttn.png';
import Button from '../../../assets/images/Button.png';

const paysage = [
  {
    image: "https://cdn2.opendemocracy.net/media/images/kigali3_gF0kWcJ.width-800.jpg",
    title: "Kigali",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/National_Museum_of_Rwanda_-_Butare_-_Flickr_-_Dave_Proffer_%284%29.jpg",
    title: "Huye",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2020/11/05/rubavu-large.jpg",
    title: "Rubavu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dc/3a/eb/mountain-gorilla-naming.jpg?w=1600&h=900&s=1/",
    title: "Musanze",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  }
]

export default function MovingCards() {
  return(
    <section className={Styles.MovingCards}>
      <div className={Styles.Header__title}>
        <h3>Popular Destinations</h3>
        <h4>Select Our Best Popular <br /> Destinations</h4>
      </div>
      <div className={Styles.Arrow__button}>
        <img src={Bttn} alt="bttn" />
        <img src={Button} alt="button" />
      </div>
      <div className={Styles.Moving__cards}>
        {paysage.map((City) => (
          <div className={Styles.City}>
            <img src={City.image} alt="city" />
            <h5>{City.title}</h5>
            <p>{City.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}