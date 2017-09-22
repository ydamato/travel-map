import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ImageLoader from 'react-imageloader';

const preloader = () => (<img src="https://preloaders.net/img/favicons/favicon-194x194.png" alt="loading" />);

const SliderComponent = (
  {
    settings,
    items,
    onClick

  }
) =>
  (
    <Slider {...settings}>
      {
        items.map((item, index) =>
          (
            <div key={index}>
              <a href="javascript:void(0)" onClick={onClick} data-position={index}>
                <ImageLoader
                  src={item.url}
                  wrapper={React.DOM.div}
                  preloader={preloader}
                >
                  Image load failed!
                </ImageLoader>
              </a>
            </div>
          )
        )
      }
    </Slider>
  );


SliderComponent.propTypes = {
  settings: PropTypes.shape().isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  ),
  onClick: PropTypes.func
};

SliderComponent.defaultProps = {
  items: null
};

export default SliderComponent;
