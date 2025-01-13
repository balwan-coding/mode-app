import { State } from "../store";

export function productsLodingSelector(state: State) {
  return state.product.loding;
}

export function productsSelector(state: State) {
  return state.product.products;
}
