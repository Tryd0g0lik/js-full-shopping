// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './reducers.ts';
import catalogReducer from './catalog/reducers.ts';
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const rootReducer = combineReducers({
  counterReducer,
  catalogReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers
);

export type RooteStore = typeof store;
export type RootStateCategory = ReturnType<typeof store.getState>;
export type RootDispatch = ReturnType<typeof store.dispatch>;

export default store; // configStore as RootState;
/**
 * Redux Store
 * https://redux.js.org/api/store
 * https://redux.js.org/api/store#store-methods
 * https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store
 * Сохраняет текущее состояние приложения внутри
 * Позволяет получить доступ к текущему состоянию через `store.getState()`;
 * Позволяет обновлять состояние с помощью `store.dispatch(action)`;
 * Регистрирует обратные вызовы прослушивателя через `store.subscribe(listener)`;
 * Обрабатывает отмену регистрации слушателей с помощью unsubscribe функции, возвращаемой `store.subscribe(listener)`.
 * ```ts
 * let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}
 * const store = createStore(rootReducer, preloadedState)
 * ```
 *  - `preloadedState` значение в качестве второго аргумента. Вы могли бы использовать это для добавления начальных данных при создании хранилища.
 */
