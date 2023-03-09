import { useState } from "react";
import "./App.css";
import Product from "./components/Product_item/Product";
import Manage from "./components/Manage/Manage";
import Attribution from "./components/Attribution/Attribution";
import AddModal from "./components/AddItemModal/Add_item_modal";

function App() {
  const [newProductIsOpen, setNewProductIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const addProduct = (val) => {
    setProducts((prev) => [...prev, val]);
  };
  const newProduct = (val) => {
    setNewProductIsOpen(val);
  };
  const closeModal = () => {
    setNewProductIsOpen(false);
  };
  const deleteProduct = (id) => {
    setProducts(() => {
      return products.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <Manage new_modal={newProduct} />
      <div className="main_block">
        {newProductIsOpen && (
          <div className="modal_overlay" onClick={closeModal} />
        )}
        {newProductIsOpen && (
          <AddModal new_modal={newProduct} add_product={addProduct} />
        )}
        {products.map((item) => (
          <Product
            item={item}
            key={item.key}
            id={item.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <Attribution />
    </div>
  );
}

export default App;
