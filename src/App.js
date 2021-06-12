import "./App.css";
import {
  Container,
  MainContainer,
  Title,
  UnorderedList,
  Year,
  List,
  WhatHappened,
} from "./styles";

function App() {
  return (
    <MainContainer>
      <Container>
        <Title>Zamami's timeline</Title>
        <UnorderedList>
          <List>
            <Year>1998</Year>
            <WhatHappened>born in 19/08/1998, it was a Wednesday.</WhatHappened>
          </List>

          <List>
            <Year>2005</Year>
            <WhatHappened>
              Went to AlRuya Bilingual School to start my education life from
              grade 1.
            </WhatHappened>
          </List>

          <List>
            <Year>2016</Year>
            <WhatHappened>
              Graduated from Alruya Bilingual School, also went to San Diego to
              start my next chapter of education. Studied Electrical
              Engineering.
            </WhatHappened>
          </List>

          <List>
            <Year>2020</Year>
            <WhatHappened>
              Graduated from San Diego State University with a Bachelor's Degree
              in Electrical Engineering.
            </WhatHappened>
          </List>
          <List>
            <Year>2021</Year>
            <WhatHappened>Joined Coded bootcamp</WhatHappened>
          </List>
        </UnorderedList>
      </Container>
    </MainContainer>
  );
}

export default App;
