import { createSelector } from 'reselect';
import shallowVaccines from './vaccines';

const shallowVaccinations = (state) => state.get('vaccinations');

export default createSelector(
  [shallowVaccinations, shallowVaccines],
  (vaccinations, vaccines) => {
    return vaccinations.map((vaccination, id) => {
      return vaccination
        .set('vaccine', vaccines.get(vaccination.get('id')))
        .set('listId', id);
    });
  }
);
