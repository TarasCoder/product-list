import "./App.css";
import Product from "./components/Product_item/Product";
import Manage from "./components/Manage/Manage";
import Attribution from "./components/Attribution/Attribution";

function App() {
  return (
    <div className="App">
      <Manage />
      <div className="main_block">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
