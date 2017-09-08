import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

const searchBoxComponent = (
  {
    showSearchedLocation,
    searchBox,
    updateSearchBoxValue
  }
) => {

  const handleSelection = () => {
    showSearchedLocation(searchBox.value);
  };

  const inputProps = {
    value: searchBox.value,
    onChange: updateSearchBoxValue,
  };

  return (
    <form>
      <PlacesAutocomplete
        inputProps={inputProps}
        onSelect={handleSelection}
        googleLogo={false}
      />
    </form>
  )
};

searchBoxComponent.propTypes = {
  searchBox: PropTypes.shape().isRequired,
  showSearchedLocation: PropTypes.func.isRequired,
  updateSearchBoxValue: PropTypes.func.isRequired
};

export default searchBoxComponent;
