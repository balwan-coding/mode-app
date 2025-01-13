import { State } from "../store";

export function happyMomentsSelector(state: State) {
  return state.happy.happyMoments;
}

export function sadMomentsSeloector(state: State) {
  return state.sad.sadMoments;
}
