import 'rxjs/add/operator/mapTo';
import { hideContextualMenu } from '../actions/mapActions';

export default action$ =>
  action$
    .ofType('SHOW_MARKER_DESCRIPTION')
    .mapTo(hideContextualMenu());

