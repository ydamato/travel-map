import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { getLabelFromGeocode } from '../utils/mapUtils';
import { updateMarkerPosition } from '../actions/mapActions';

const getPreviousMarkerState = (id, store) =>
  store.markers.find(marker => marker.id === id).previousState;

export default (action$, store) =>
  action$
    .ofType('UPDATE_MARKER_POSITION_REQUEST')
    .mergeMap(action =>
      ajax(
        {
          url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${action.lat},${action.lng}`,
          crossDomain: true
        }
      )
        .mergeMap((data) => {
          const label = getLabelFromGeocode(data.response);
          let previousState = null;

          if (label) {
            return Observable.of(updateMarkerPosition(action.id, getLabelFromGeocode(data.response), action.lat, action.lng));
          }

          previousState = getPreviousMarkerState(action.id, store.getState());
          return Observable.of(updateMarkerPosition(action.id, previousState.title, previousState.position.lat, previousState.position.lng));
        })
    );

