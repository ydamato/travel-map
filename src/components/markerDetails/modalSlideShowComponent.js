import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import Slider from '../common/sliderComponent';


const ModalSlideShowComponent = (
  {
    onHide,
    marker,
    initialPosition

  }
) => {
  const modalSlideShowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-slideshow',
    lazyLoad: true,
    initialSlide: initialPosition
  };

  return (
    <Modal show={true} onHide={onHide} dialogClassName="modal-slideshow">
      <Modal.Header closeButton>
        <Modal.Title>Slideshow</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Slider settings={modalSlideShowSettings} items={marker.pictures} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
};


ModalSlideShowComponent.propTypes = {
  initialPosition: PropTypes.number,
  marker: PropTypes.shape({
    pictures: PropTypes.arrayOf(
      PropTypes.shape().isRequired
    ).isRequired
  }).isRequired,
  onHide: PropTypes.func
};

ModalSlideShowComponent.defaultProps = {
  initialPosition: 0,
  onHide: null
};

export default ModalSlideShowComponent;
