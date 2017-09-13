import 'rxjs/add/operator/mapTo';

export default action$ =>
  action$
    .ofType('SHOW_MARKER_DESCRIPTION')
    .mapTo({ type: 'HIDE_CONTEXTUAL_MENU' });

