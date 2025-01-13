import { AnyAction } from "redux";
import { Moment } from "../store";
import { produce } from "immer";
import { HAPPY_BUTTON_CLICKED_ACTIONS } from "../actions/mode-actions";

export type HappyState = {
  happyMoments: Moment[];
};

export const initailHappyState: HappyState = {
  happyMoments: [],
};

function happinessReducers(
  currentHappyState = initailHappyState,
  action: AnyAction
) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED_ACTIONS:
      return produce(currentHappyState, (draft) => {
        draft.happyMoments.push(action.payload);
      });
    default:
      return currentHappyState;
  }
}

export default happinessReducers;
