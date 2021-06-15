import { Year, WhatHappened, List } from "../styles";

const TimelineItem = (props) => {
  return (
    <List>
      <Year>{props.year}</Year>
      <WhatHappened>{props.details}</WhatHappened>
    </List>
  );
};

export default TimelineItem;
