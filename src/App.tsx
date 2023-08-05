import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import MainWrapper from "./components/MainWrapper";

const App = () => {
  return (
    <Container>
      <MainWrapper>
        <Header />
        <Main />
      </MainWrapper>

      <Footer />
    </Container>
  );
};

export default App;
