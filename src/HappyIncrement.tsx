import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClickd } from "./actions";

type HappyIncrementProps = {};

const HappyIncrement: FC<HappyIncrementProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(happyButtonClickd(quantity, new Date()));
  }
  return (
    <div className="flex flex-col items-center">
      <h3>Are you Happy</h3>
      <input
        className="p-1 m-2 border border-gray-900 rounded-md w-44"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <button
        onClick={increment}
        className="w-16 p-1 m-3 text-white bg-orange-600 rounded"
      >
        Yes
      </button>
    </div>
  );
};

export default memo(HappyIncrement);
