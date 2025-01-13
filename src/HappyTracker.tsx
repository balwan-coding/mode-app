import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectirs/mod-selectors";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = () => {
  const happyMoments = useSelector(happyMomentsSelector);

  return (
    <div className="flex flex-col gap-5 m-2 ">
      {happyMoments.map((m) => (
        <div
          key={m.when.toISOString()}
          className="p-3 text-white bg-orange-600 rounded-md"
        >
          <>
            Happyness Intensity: {m.intensity} , when: {m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};

export default memo(HappyTracker);
