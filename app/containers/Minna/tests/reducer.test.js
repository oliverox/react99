import expect from 'expect';
import minnaReducer from '../reducer';
import { fromJS } from 'immutable';

describe('minnaReducer', () => {
  it('returns the initial state', () => {
    expect(minnaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
