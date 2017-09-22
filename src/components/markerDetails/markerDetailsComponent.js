import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Slider from '../common/sliderComponent';
import ModalSlideShow from './modalSlideShowComponent';

const _carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  lazyLoad: true,
  className: 'slider-pictures'
};

const MarkerDetailsComponent = (
  {
    marker,
    modalSlideShow,
    removeMarker,
    showModalSlideShow,
    hideModalSlideShow
  }
) => {
  const remove = () => {
    removeMarker(marker.id);
  };

  const _showModalSlideShow = (event) => {
    const position = parseInt(event.currentTarget.getAttribute('data-position'), 10);
    showModalSlideShow(position);
  };

  if (!marker) {
    return (<div> Marker details will appear here, choose a marker to see its details.</div>);
  }

  return (
    <div>
      <h1> {marker.title} </h1>
      <div>
        {marker.description}
        {
          !!marker.pictures.length &&
          <Slider settings={_carouselSettings} items={marker.pictures} onClick={_showModalSlideShow} />
        }
      </div>
      <Button onClick={remove} className="btn-delete-marker pull-right inline" bsStyle="danger">
        Delete
      </Button>
      {
        modalSlideShow.showSlideShow &&
        <ModalSlideShow onHide={hideModalSlideShow} marker={marker} initialPosition={modalSlideShow.initialPosition} />
      }

    </div>
  );
};

MarkerDetailsComponent.propTypes = {
  marker: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(
      PropTypes.shape()
    ).isRequired,
  }),
  modalSlideShow: PropTypes.shape({
    showSlideShow: PropTypes.bool.isRequired,
    initialPosition: PropTypes.number.isRequired
  }).isRequired,
  removeMarker: PropTypes.func.isRequired,
  showModalSlideShow: PropTypes.func.isRequired,
  hideModalSlideShow: PropTypes.func.isRequired
};

MarkerDetailsComponent.defaultProps = {
  marker: null
};

export default MarkerDetailsComponent;
