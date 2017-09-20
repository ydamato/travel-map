import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import Slider from 'react-slick';

const MarkerDetailsComponent = (
  {
    marker,
    removeMarker
  }
) => {
  const noMarker = () => (
    <div> Marker details will appear here, choose a marker to see its details. </div>
  );

  const remove = () => {
    removeMarker(marker.id);
  };

  const deleteTooltip = (
    <Tooltip id="tooltip">Delete</Tooltip>
  );

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'slider-pictures'
  };

  return marker ?
    (
      <div>
        <h1> {marker.title} </h1>
        <div>
          {marker.description}
          { 
            !!marker.pictures.length &&
            <Slider {...slickSettings}>
              {
                marker.pictures.map((picture, index) => 
                  (
                    <div key={index}>
                      <img alt={picture.title} src={picture.url} />
                    </div>
                  )
                )
              }
            </Slider>
          }



          <OverlayTrigger placement="top" overlay={deleteTooltip}>
            <Button onClick={remove} className="btn-delete-marker pull-right inline" bsStyle="danger">
              Delete
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    ) : noMarker();
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
  removeMarker: PropTypes.func.isRequired
};

MarkerDetailsComponent.defaultProps = {
  marker: null
};

export default MarkerDetailsComponent;
