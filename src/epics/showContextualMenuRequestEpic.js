import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { getLabelFromGeocode } from '../utils/mapUtils';
import { showContextualMenu } from '../actions/mapActions';


export default action$ =>
  action$
    .ofType('SHOW_CONTEXTUAL_MENU_REQUEST')
    .mergeMap(action =>
      ajax({ url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${action.lat},${action.lng}`, crossDomain: true })
        .map(data => showContextualMenu(action.lat, action.lng, getLabelFromGeocode(data.response)))
    );
