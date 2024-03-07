/**
 * `src\frontend\src\reduxs\Reducers\catalog\reducers.ts`
 *
 *  */
import { PositionsCatalog } from '@reduxs/interfaces.ts';
const map = new Map();
map.clear();
const catalogReducer = (state: PositionsCatalog = {
  type: 'CATALOG',
  positions: []
}, action: PositionsCatalog): PositionsCatalog => {
  if ((action.type !== undefined) && ((action.type as string).includes('CATALOG'))) {
    console.log(`#3 [Reducer.catalog] state.positions  Length: ${state.positions.length}`);
    for (let i = 0; i < action.positions.length; i++) {
      const id = action.positions[i].id;
      if (!map.has(id)) {
        (state.positions).push(action.positions[i]);
        map.set(id, action.positions[i]);
      }
    }

    console.log(`#4 [Reducer.catalog] state.positions  Length: ${state.positions.length}`);
    return {
      type: 'CATALOG',
      positions: state.positions
    };
  } else {
    return {
      type: 'CATALOG',
      positions: state.positions
    };
  }
};
export default catalogReducer;
