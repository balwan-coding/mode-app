import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLodingSelector, productsSelector } from "./selectirs/products";
import { loadProductAction, productLoadedAction } from "./actions/product";
import axios from "axios";

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = () => {
  const loading = useSelector(productsLodingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductAction());
    axios
      .get("https://myeasyKart.codeyogi.io/products")
      .then((response) => dispatch(productLoadedAction(response.data.data)));
  }, []);

  return (
    <div>
      {loading && <div className="text-3xl text-red-700">Loding</div>}
      {products &&
        products.map((p) => (
          <div key={p.id}>
            {p.title} {p.price}
          </div>
        ))}
    </div>
  );
};

ProductListPage.defaultProps = {};

export default memo(ProductListPage);
