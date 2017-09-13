import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { getLabelFromGeocode } from '../utils/mapUtils';
import { updateMarkerTitle } from '../actions/mapActions';


export default action$ =>
  action$
    .ofType('UPDATE_MARKER_POSITION_REQUEST')
    .mergeMap(action =>
      ajax({ url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${action.lat},${action.lng}`, crossDomain: true })
        .map(data => updateMarkerTitle(action.id, getLabelFromGeocode(data.response)))
    );
