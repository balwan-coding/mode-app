import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClickd } from "./actions/mode-actions";

type SadIncrementProps = {};

const SadIncrement: FC<SadIncrementProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(sadButtonClickd(quantity, new Date()));
  }
  return (
    <div className="flex flex-col items-center">
      <h3>Are you Sad</h3>
      <input
        className="p-1 m-2 border border-gray-900 rounded-md w-44"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <button
        onClick={increment}
        className="w-16 p-1 m-3 font-semibold text-white bg-blue-700 rounded"
      >
        Yes
      </button>
    </div>
  );
};

export default memo(SadIncrement);
