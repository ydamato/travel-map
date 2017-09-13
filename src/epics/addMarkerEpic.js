import 'rxjs/add/operator/mapTo';

export default action$ =>
  action$
    .ofType('ADD_MARKER')
    .mergeMap(() => [
      { type: 'HIDE_MARKER_DESCRIPTION' },
      { type: 'HIDE_CONTEXTUAL_MENU' }
    ]);
