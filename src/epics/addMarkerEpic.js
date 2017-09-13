import 'rxjs/add/operator/mapTo';
import { hideMarkerDescription, hideContextualMenu } from '../actions/mapActions';

export default action$ =>
  action$
    .ofType('ADD_MARKER')
    .mergeMap(() => [
      hideMarkerDescription(),
      hideContextualMenu()
    ]);
