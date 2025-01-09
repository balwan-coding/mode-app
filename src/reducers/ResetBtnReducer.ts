import { AnyAction } from "redux";
import { RESET_BUTTON_CLICKE_ACTIONS } from "../actions";
import { Moment } from "../store";

export type RestState = {
  reset: Moment[];
};

export const initailResetState: RestState = {
  reset: [],
};

function resetBtnReducers(currentResetState: RestState, action: AnyAction) {
  switch (action.type) {
    case RESET_BUTTON_CLICKE_ACTIONS:
      return {
        ...currentResetState,
        resetbtn: [],
      };
    default:
      return currentResetState;
  }
}

export default resetBtnReducers;
