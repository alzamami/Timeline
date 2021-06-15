import TimelineItem from "./TimelineItem";

import timelineData from "../data";

const TimelineList = () => {
  return (
    <div>
      {timelineData.map((oneData) => (
        <TimelineItem details={oneData.details} year={oneData.year} />
      ))}
    </div>
  );
};

export default TimelineList;
