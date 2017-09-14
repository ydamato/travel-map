import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

const searchBoxComponent = (
  {
    showSearchedLocationRequest,
    searchBox,
    updateSearchBoxValue
  }
) => {
  const handleSelection = () => {
    showSearchedLocationRequest(searchBox.value);
  };

  const inputProps = {
    value: searchBox.value,
    onChange: updateSearchBoxValue,
  };

  const styles = {
    autocompleteContainer: {
      zIndex: 2000
    },
  };

  return (
    <form>
      <PlacesAutocomplete
        inputProps={inputProps}
        styles= {styles}
        onSelect={handleSelection}
        googleLogo={false}
      />
    </form>
  );
};

searchBoxComponent.propTypes = {
  searchBox: PropTypes.shape().isRequired,
  showSearchedLocationRequest: PropTypes.func.isRequired,
  updateSearchBoxValue: PropTypes.func.isRequired
};

export default searchBoxComponent;
