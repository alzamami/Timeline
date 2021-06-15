import "./App.css";
import { Container, MainContainer, Title, UnorderedList } from "./styles";
import TimelineList from "./components/TimelineList";

function App() {
  return (
    <MainContainer>
      <Container>
        <Title>Zamami's timeline</Title>
        <UnorderedList>
          <TimelineList />
        </UnorderedList>
      </Container>
    </MainContainer>
  );
}

export default App;
