import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LeftSlide, RighSlide } from './Atoms/Icons';

// const Slider = styled.div`
//   position: absolute;
//   top: 90%;
// `;

const ImageContent = styled.section`
  margin: auto;
  max-width: 100vw;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <ImageContent>
      <Image key={currentIndex} src={images[currentIndex]} alt="slides" />
      <LeftSlide onClick={handlePrevious} />
      <RighSlide onClick={handleNext} />
    </ImageContent>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
