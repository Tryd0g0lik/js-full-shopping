/* { "id": 66, "category": 13, "title": "Босоножки 'Myer' с завязкой на щиколотке",
 "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg", "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"],
 "sku": "1000046", "manufacturer": "PAUL ANDREW", "color": "Черный",
  "material": "Кожа", "reason": "Прогулка", "season": "Лето",
   "heelSize": "4 см.", "price": 34000, "sizes": [{ "size": "18 US", "available": true },
     { "size": "20 US", "available": false }] } */

import { PositionsCard } from '@reduxs/interfaces.ts';
import { Position } from '@type';
const map = new Map();
map.clear();
const userStete: PositionsCard['positions'] = [];
/**
 * Action.order has Tenplate. It's:  ```ts
 * {
    type: 'ORDER',
    positions: [{
      id: number,
      title: string,
      size: string,
      quantility: string,
      price: number)
    }]
  };
  ```.
 * @param state
 * @param action
 * @returns
 */
const orderReducer = (state: PositionsCard = {
  type: 'ORDER',
  positions: []
}, action: PositionsCard): PositionsCard => {
  const newState = { ...state };
  if ((action !== undefined) && ((action.type as string).includes('ORDER'))) {
    console.log(` №0 [Reducers/order/reducers][PositionsCard] State.position.length on start: ${state.positions.length}`);
    console.log(` №1 [Reducers/order/reducers][PositionsCard] Action.position Before SET: Length: ${action.positions.length}`);
    for (let i = 0; i < action.positions.length; i++) {
      const id = action.positions[i].id;

      if (!map.has(id)) {
        (newState.positions).push(action.positions[i]);
        map.set(id, action.positions[i]);
      }
    }
    state.positions = newState.positions;
    // state.positions = (state.positions).concat(action.positions);
    console.log(`## [Reducers/order/reducers][PositionsCard] State position is Before SENDING: ${state.positions.length}`);
    return {
      type: 'ORDER',
      positions: state.positions
    };
  } else {
    return {
      type: 'ORDER',
      positions: state.positions
    };
  }
};

export default orderReducer;
