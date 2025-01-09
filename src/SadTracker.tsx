import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSeloector } from "./selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
  const sadMoments = useSelector(sadMomentsSeloector);
  return (
    <div className="flex flex-col gap-5 m-2 ">
      {sadMoments.map((m) => (
        <div key={m.when} className="p-3 text-white bg-blue-600 rounded-md">
          Sadness Intensity: {m.intensity} , when: {m.when.toISOString()}
        </div>
      ))}
    </div>
  );
};

export default memo(SadTracker);
