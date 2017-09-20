import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import ImageLoader from 'react-imageloader';

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

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    className: 'slider-pictures'
  };

  const modalSlideShowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-slideshow',
    lazyLoad: true,
    initialSlide: modalSlideShow.initialPosition
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
          <Slider {...carouselSettings}>
            {
              marker.pictures.map((picture, index) =>
                (
                  <div key={index}>
                    <a href="javascript:void(0)" onClick={_showModalSlideShow} data-position={index}>
                      <ImageLoader
                        src={picture.url}
                        wrapper={React.DOM.div}
                        preloader={() => (<img src="https://preloaders.net/img/favicons/favicon-194x194.png" alt="loading" />)}
                      >
                        Image load failed!
                      </ImageLoader>
                    </a>
                  </div>
                )
              )
            }
          </Slider>
        }
      </div>
      <Button onClick={remove} className="btn-delete-marker pull-right inline" bsStyle="danger">
        Delete
      </Button>
      {
        modalSlideShow.showSlideShow &&
        <Modal show={true} onHide={hideModalSlideShow} dialogClassName="modal-slideshow">
          <Modal.Header closeButton>
            <Modal.Title>Slideshow</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Slider {...modalSlideShowSettings}>
              {
                marker.pictures.map((picture, index) =>
                  (
                    <div key={index}>
                      <a href="javascript:void(0)" onClick={_showModalSlideShow} data-position={index}>
                        <ImageLoader
                          src={picture.url}
                          wrapper={React.DOM.div}
                          preloader={() => (<img src="https://preloaders.net/img/favicons/favicon-194x194.png" alt="loading" />)}
                        >
                          Image load failed!
                        </ImageLoader>
                      </a>
                      <div>{picture.title}</div>
                      <div>{picture.description}</div>
                    </div>
                  )
                )
              }
            </Slider>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModalSlideShow}>Close</Button>
          </Modal.Footer>
        </Modal>
      }

    </div>
  );
};

MarkerDetailsComponent.propTypes = {
  marker: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired
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
