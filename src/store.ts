import { combineReducers, createStore } from "redux";

import sadnessReducers from "./reducers/SadnessReducers";
import happinessReducers from "./reducers/HappinessReducer";

export type Moment = {
  intensity: number;
  when: Date;
};

const reducer = combineReducers({
  sad: sadnessReducers,
  happy: happinessReducers,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
