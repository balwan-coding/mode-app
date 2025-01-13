import { combineReducers, createStore } from "redux";

import sadnessReducers from "./reducers/SadnessReducers";
import happinessReducers from "./reducers/HappinessReducer";
import productsReducer from "./reducers/ProductsReducers";

export type Moment = {
  intensity: number;
  when: Date;
};

const reducer = combineReducers({
  sad: sadnessReducers,
  happy: happinessReducers,
  product: productsReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
