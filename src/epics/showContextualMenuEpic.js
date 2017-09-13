import 'rxjs/add/operator/mapTo';

export default action$ =>
  action$
    .ofType('SHOW_CONTEXTUAL_MENU')
    .mapTo({ type: 'HIDE_MARKER_DESCRIPTION' });
