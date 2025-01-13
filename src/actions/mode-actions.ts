import { ActionCreator } from "./index.ts";
import { Moment } from "../store.ts";

export const HAPPY_BUTTON_CLICKED_ACTIONS = "happy button clicked";
export const SAD_BUTTON_CLICKED_ACTIONS = "SAD button clicked";

export const happyButtonClickd: ActionCreator<Moment> = (
  intensity: number,
  when: Date
) => ({
  type: HAPPY_BUTTON_CLICKED_ACTIONS,
  payload: { intensity, when },
});

export const sadButtonClickd: ActionCreator<Moment> = (
  intensity: number,
  when: Date
) => ({
  type: SAD_BUTTON_CLICKED_ACTIONS,
  payload: { intensity, when },
});
