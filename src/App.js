import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product_item/Product";
import Manage from "./components/Manage/Manage";
import Attribution from "./components/Attribution/Attribution";
import AddItemModal from "./components/Modals/AddItemModal/Add_item_modal";
import RemoveItemModal from "./components/Modals/RemoveItemModal/RemoveItemModal";
import { LS_PRODUCTS, SORTED_BY } from "./ConstNames";

function App() {
  let lsProducts = JSON.parse(localStorage.getItem(LS_PRODUCTS)) || [];
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem(SORTED_BY) || ""
  );
  const [products, setProducts] = useState(lsProducts);
  const [newProductIsOpen, setNewProductIsOpen] = useState(false);
  const [deleteConfModal, setDeleteConfOpen] = useState(false);
  const [deleteItemID, setDeleteItemID] = useState("");

  useEffect(() => {
    localStorage.setItem(LS_PRODUCTS, JSON.stringify(products));
  }, [products]);

  const saveSortedState = (newState) => {
    setProducts(newState);
  };
  const addProduct = (val) => {
    setProducts((prev) => [...prev, val]);
    setSelectedValue("");
    localStorage.setItem(SORTED_BY, "");
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
  const dropDownStatus = (val) => {
    setSelectedValue(val);
  };
  const confirm_delete_item = () => {
    deleteProduct(deleteItemID);
    setDeleteConfOpen(false);
  };
  const deleteProductModalOpen = (id) => {
    setDeleteItemID(id);
    setDeleteConfOpen(true);
  };
  const cancel_action = () => {
    setDeleteConfOpen(false);
  };

  return (
    <div className="App">
      <Manage
        new_modal={newProduct}
        products={products}
        sortedState={saveSortedState}
        lsSorted={selectedValue}
        dropDownStatus={dropDownStatus}
      />
      <div className="main_block">
        {/* MODALS BLOCK */}
        {/* New item modal */}
        {newProductIsOpen && (
          <div className="modal_overlay" onClick={closeModal} />
        )}
        {newProductIsOpen && (
          <AddItemModal new_modal={newProduct} add_product={addProduct} />
        )}
        {/* Confirmation of deleting modal */}
        {deleteConfModal && (
          <div className="modal_overlay" onClick={cancel_action} />
        )}
        {deleteConfModal && (
          <RemoveItemModal
            confirm_del={confirm_delete_item}
            cancel_action={cancel_action}
          />
        )}

        {products.map((item) => (
          <Product
            item={item}
            key={item.key}
            id={item.id}
            deleteProduct={deleteProduct}
            deleteProductModalOpen={deleteProductModalOpen}
          />
        ))}
      </div>
      <Attribution />
    </div>
  );
}

export default App;
