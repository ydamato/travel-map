import 'rxjs/add/operator/mapTo';
import { hideMarkerDescription } from '../actions/mapActions';


export default action$ =>
  action$
    .ofType('SHOW_CONTEXTUAL_MENU')
    .mapTo(hideMarkerDescription());
