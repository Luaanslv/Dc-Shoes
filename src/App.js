import Carousel from "./components/header/carousel/Carousel";
import Menu from "./components/header/Menu";
import Content from "./components/main/Content";
import Info from "./components/footer/Info";
import CardBanner from "./components/main/CardBanner";
import Cards2 from "./components/main/Cards2";
import Banner2 from "./components/main/Banner2";
import Cards from "./components/main/Cards";
import Banner3 from "./components/footer/Banner3";


function App() {
  return (
    <div className="App">
      <header>
          <Menu />
          <Carousel/>
      </header>
      <main>
        <Content />
        <Cards/>
        <Banner2 />
        <Cards2 />
        <CardBanner/>
      </main>
      <footer>
        <Info />
        <Banner3/>
      </footer>
    </div>
  );
}

export default App;
