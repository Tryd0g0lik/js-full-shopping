/* { "id": 66, "category": 13, "title": "Босоножки 'Myer' с завязкой на щиколотке",
 "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg", "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"],
 "sku": "1000046", "manufacturer": "PAUL ANDREW", "color": "Черный",
  "material": "Кожа", "reason": "Прогулка", "season": "Лето",
   "heelSize": "4 см.", "price": 34000, "sizes": [{ "size": "18 US", "available": true },
     { "size": "20 US", "available": false }] } */

import { PositionsCard } from "@type";
import { Position } from '@type';
const map = new Map();
map.clear();

const userStete: PositionsCard['order'] = [] as unknown as (PositionsCard['order']);
/**
 * Action.order has Tenplate. It's:  ```ts
 * {
    type: 'ORDER',
    order: [{
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
  order: userStete
}, action: PositionsCard): PositionsCard => {
  const newState = { ...state };
  if ((action !== undefined) && ((action.type as string).includes('ORDER'))) {
    console.log(` №0 [Reducers/order/reducers][PositionsCard] State.position.length on start: ${state.order.length}`);
    console.log(` №1 [Reducers/order/reducers][PositionsCard] Action.position Before SET: Length: ${action.order.length}`);
    for (let i = 0; i < action.order.length; i++) {
      const id = action.order[i].id;

      if (!map.has(id)) {
        (newState.order).push(action.order[i]);
        map.set(id, action.order[i]);
      }
    }
    state.order = newState.order;
    // state.order = (state.order).concat(action.order);
    console.log(`## [Reducers/order/reducers][PositionsCard] State position is Before SENDING: ${state.order.length}`);
    return {
      type: 'ORDER',
      order: state.order
    };
  } else {
    return {
      type: 'ORDER',
      order: state.order
    };
  }
};

export default orderReducer;
