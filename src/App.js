import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product_item/Product";
import Manage from "./components/Manage/Manage";
import Attribution from "./components/Attribution/Attribution";
import AddModal from "./components/AddItemModal/Add_item_modal";
import {LS_PRODUCTS, SORTED_BY} from "./ConstNames";

function App() {

  let lsProducts = JSON.parse(localStorage.getItem(LS_PRODUCTS)) || [];
  let lsSorted = localStorage.getItem(SORTED_BY) || "";
  const [products, setProducts] = useState(lsProducts);
  const [newProductIsOpen, setNewProductIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(LS_PRODUCTS, JSON.stringify(products));
  }, [products]);

  const saveSortedState = (newState) => {
    setProducts(newState);
  };
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
      <Manage
        new_modal={newProduct}
        products={products}
        sortedState={saveSortedState}
        isSorted={lsSorted}
      />
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
