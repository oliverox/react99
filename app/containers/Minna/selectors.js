import { createSelector } from 'reselect';

/**
 * Direct selector to the minna state domain
 */
const selectMinnaDomain = () => state => state.get('minna');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Minna
 */

const selectMinna = () => createSelector(
  selectMinnaDomain(),
  (substate) => substate.toJS()
);

export default selectMinna;
export {
  selectMinnaDomain,
};
