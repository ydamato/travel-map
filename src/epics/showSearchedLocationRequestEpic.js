import 'rxjs';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { showContextualMenu } from '../actions/mapActions';

export default action$ =>
  action$
    .ofType('SHOW_SEARCHED_LOCATION_REQUEST')
    .mergeMap(action =>
      geocodeByAddress(action.value)
        .then(results => getLatLng(results[0]))
        .then(latLng => showContextualMenu(latLng.lat, latLng.lng, action.value))
    );
