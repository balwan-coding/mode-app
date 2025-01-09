import { Moment } from "./store";

export const HAPPY_BUTTON_CLICKED_ACTIONS = "happy button clicked";
export const SAD_BUTTON_CLICKED_ACTIONS = "SAD button clicked";

type ActionCreator<T> = (...args: any) => { type: string; payload: T };

export const happyButtonClickd: ActionCreator<Moment> = (
  count: number,
  when: Date
) => ({
  type: HAPPY_BUTTON_CLICKED_ACTIONS,
  payload: { intensity: count, when },
});

export const sadButtonClickd: ActionCreator<Moment> = (
  count: number,
  when: Date
) => ({
  type: SAD_BUTTON_CLICKED_ACTIONS,
  payload: { intensity: count, when },
});
