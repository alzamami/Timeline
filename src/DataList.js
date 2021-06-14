import { Year, WhatHappened, List } from "./styles";

export const DataList = (props) => {
  return (
    <List>
      <Year>{props.year}</Year>
      <WhatHappened>{props.details}</WhatHappened>
    </List>
  );
};
