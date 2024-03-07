import { Position } from '@type';
import { PositionsCatalog } from '@reduxs/interfaces.ts';
const catalogReducer = (state: Position[] = [], action: PositionsCatalog): PositionsCatalog => {
  // console.log('[catalogReducer] test 0 - state: ', !Array.isArray(state), 'Vaule: ', state);
  switch (action.type) {
    case ('CATALOG'): {
      return {
        type: 'CATALOG',
        positions: state // .concat(state)
      };
    }
    default: {
      return {
        type: 'CATALOG',
        positions: state
      };
    }
  }
};
export default catalogReducer;
