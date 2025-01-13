import Product from "../models/Product";
import { ActionCreator } from "./index";

export const LOAD_PRODUCT = "loadProduct";

export const loadProductAction: ActionCreator = () => ({
  type: LOAD_PRODUCT,
  payload: undefined,
});

export const PRODUCT_LOADED = "PRODUCTLOADED";

export const productLoadedAction: ActionCreator<Product> = (Products) => ({
  type: PRODUCT_LOADED,
  payload: Products,
});
