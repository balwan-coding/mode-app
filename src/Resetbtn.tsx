import { FC, memo } from "react";

type ResetbtnProps = {};

const Resetbtn: FC<ResetbtnProps> = () => {
  return (
    <div>
      <button className="bg-red-500 ">Reset</button>
    </div>
  );
};

export default memo(Resetbtn);
