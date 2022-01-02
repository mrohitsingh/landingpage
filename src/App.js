import "./App.css";
import {
  THeader,
  Header,
  Carousels,
  Products,
  Services,
  Portfolio,
  Developers,
  CTA,
  Footer,
} from "./component";

function App() {
  return (
    <div className="App">
      <THeader />
      <Header />
      <Carousels />
      <Products />
      <Services />
      <Portfolio />
      <Developers />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
