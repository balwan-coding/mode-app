import { AnyAction } from "redux";
import {} from "../actions";
import { produce } from "immer";
import Product from "../models/Product";
import { LOAD_PRODUCT, PRODUCT_LOADED } from "../actions/product";

type State = {
  products: Product[];
  loding: boolean;
};

const initialState: State = {
  products: [],
  loding: false,
};

function productsReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCT:
      return produce(state, (draft) => {
        draft.loding = true;
      });

    case PRODUCT_LOADED:
      return produce(state, (draft) => {
        draft.products = action.payload;
        draft.loding = false;
      });
    default:
      return state;
  }
}

export default productsReducer;
