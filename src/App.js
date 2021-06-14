import "./App.css";
import { Container, MainContainer, Title, UnorderedList } from "./styles";
import { TLData } from "./TimelineData";

function App() {
  return (
    <MainContainer>
      <Container>
        <Title>Zamami's timeline</Title>
        <UnorderedList>
          <TLData />
        </UnorderedList>
      </Container>
    </MainContainer>
  );
}

export default App;
