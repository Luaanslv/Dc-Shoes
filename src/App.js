import Carousel from "./components/header/carousel/Carousel";
import Menu from "./components/header/Menu";
import Content from "./components/main/Content";


function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Menu />
          <Carousel/>
        </div>
      </header>
      <main>
        <Content/>
      </main>
    </div>
  );
}

export default App;
