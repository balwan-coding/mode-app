import { AnyAction } from "redux";
import { Moment } from "../store";
import { produce } from "immer";
import { SAD_BUTTON_CLICKED_ACTIONS } from "../actions/mode-actions";

export type SadState = {
  sadMoments: Moment[];
};

export const initialSadState: SadState = {
  sadMoments: [],
};

function sadnessReducers(currentSadState = initialSadState, action: AnyAction) {
  switch (action.type) {
    case SAD_BUTTON_CLICKED_ACTIONS:
      return produce(currentSadState, (draft) => {
        draft.sadMoments.push(action.payload);
      });

    default:
      return currentSadState;
  }
}

export default sadnessReducers;
