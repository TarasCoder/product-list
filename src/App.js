import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product_item/Product";
import Manage from "./components/Manage/Manage";
import Attribution from "./components/Attribution/Attribution";
import AddItemModal from "./components/Modals/AddItemModal/Add_item_modal";
import RemoveItemModal from "./components/Modals/RemoveItemModal/RemoveItemModal";
import ReadMore from "./components/Modals/ReadMore/ReadMore";
import ProductDetails from "./components/Modals/ProductDetails/ProductDetails";
import AddComments from "./components/Modals/Comments/AddComments/AddComments";
import ReadComments from "./components/Modals/Comments/ReadComments/ReadComments";
import Pagination from "./components/Pagination/Pagination";
import { LS_PRODUCTS, SORTED_BY } from "./ConstNames";

function App() {
  let lsProducts = JSON.parse(localStorage.getItem(LS_PRODUCTS)) || [];
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem(SORTED_BY) || ""
  );
  const [products, setProducts] = useState(lsProducts);
  const [productsPagination, setProductsPagination] = useState(products);
  const [newProductIsOpen, setNewProductIsOpen] = useState(false);
  const [deleteConfModal, setDeleteConfOpen] = useState(false);
  const [readMoreModal, setReadMoreModal] = useState(false);
  const [productDetails, setProductDetails] = useState(false);
  const [commentsRead, setCommentsRead] = useState(false);
  const [commentsAdd, setCommentsAdd] = useState(false);
  const [currentComments, setCurrentComments] = useState([]);
  const [readMore, setReadMore] = useState("");
  const [deleteItemID, setDeleteItemID] = useState("");
  const [productDetailsItemData, setProductDetailsItemData] = useState("");

  // Rewrite LS when state of products is changed
  useEffect(() => {
    localStorage.setItem(LS_PRODUCTS, JSON.stringify(products));
  }, [products]);

  // Updating products with sorted state
  const saveSortedState = (newState) => {
    setProducts(newState);
  };

  // Show more
  const show_more = (id) => {
    setReadMoreModal(true);
    products.forEach((el) => {
      if (el.id === id) {
        setReadMore(el.description);
      }
    });
  };
  const closeReadMore = () => {
    setReadMoreModal(false);
  };

  // Adding product to array with additional options
  const addProduct = (val) => {
    setProducts((prev) => [...prev, val]);
    setSelectedValue("");
    localStorage.setItem(SORTED_BY, "");
  };

  // Product modal window
  const newProduct = (val) => {
    setNewProductIsOpen(val);
  };
  const closeModal = () => {
    setNewProductIsOpen(false);
  };

  // Delete product function
  const deleteProduct = (id) => {
    setProducts(() => {
      return products.filter((item) => {
        return item.id !== id;
      });
    });
  };

  // Status of "select" dropdown
  const dropDownStatus = (val) => {
    setSelectedValue(val);
  };

  // Delete item modal
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

  const paginationGo = (paginatedArr) => {
    setProductsPagination(paginatedArr);
  };
  const updateProduct = (item) => {
    setProducts(prev => {
      return prev.map(product=> {
        if(product.id === item.id){
          return item;
        };
        return product;
      })
    });
    setSelectedValue("");
    localStorage.setItem(SORTED_BY, "");
  };
  const productDetailsItem = (item) => {
    setProductDetailsItemData(item);
  };
  const openProductDetails = () => {
    setProductDetails(true);
  };
  const closeProductDetails = () => {
    setProductDetails(false);
  };
  const openAddComments = () => {
    setCommentsAdd(true);
  };
  const openReadComments = (comments) => {
    setCommentsRead(true);
    setCurrentComments(comments);
  };
  const closeReadComments = () => {
    setCommentsRead(false);
  };
  const closeAddComments = () => {
    setCommentsAdd(false);
  };
  const addComment = (comment) => {
    const product = products.find((p) => p.id === productDetailsItemData.id);
    product.comments.push(comment);
    setProducts((prev) => [...prev]);
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
        {productDetails && (
          <div className="modal_overlay" onClick={closeProductDetails} />
        )}
        {productDetails && (
          <ProductDetails
            closeProductDetails={closeProductDetails}
            productDetailsItemData={productDetailsItemData}
            show_more={show_more}
            openAddComments={openAddComments}
            openReadComments={openReadComments}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            deleteProductModalOpen={deleteProductModalOpen}
          />
        )}
        {/* New item modal */}
        {newProductIsOpen && (
          <div className="modal_overlay" onClick={closeModal} />
        )}
        {newProductIsOpen && (
          <AddItemModal new_modal={newProduct} add_product={addProduct} />
        )}

        {/* Adding new comment modal */}
        {commentsAdd && (
          <div className="modal_overlay" onClick={closeAddComments} />
        )}
        {commentsAdd && (
          <AddComments
            closeAddComments={closeAddComments}
            addComment={addComment}
          />
        )}

        {/* Reading comments modal */}
        {commentsRead && (
          <div className="modal_overlay" onClick={closeReadComments} />
        )}
        {commentsRead && (
          <ReadComments
            closeReadComments={closeReadComments}
            comments={currentComments}
          />
        )}

        {/* Confirmation of deleting modal */}
        {deleteConfModal && (
          <div className="modal_overlay" onClick={cancel_action} />
        )}
        {deleteConfModal && (
          <RemoveItemModal
            confirm_del={confirm_delete_item}
            cancel_action={cancel_action}
            closeProductDetails={closeProductDetails}
          />
        )}

        {/* Read more modal */}
        {readMoreModal && (
          <div className="modal_overlay" onClick={closeReadMore} />
        )}
        {readMoreModal && (
          <ReadMore closeReadMore={closeReadMore} readMore={readMore} />
        )}

        {productsPagination.map((item) => (
          <Product
            item={item}
            key={item.key}
            id={item.id}
            show_more={show_more}
            // deleteProduct={deleteProduct}
            // deleteProductModalOpen={deleteProductModalOpen}
            openProductDetails={openProductDetails}
            productDetailsItem={productDetailsItem}
          />
        ))}
      </div>
      <Pagination products={products} paginate={paginationGo} />
      <Attribution />
    </div>
  );
}

export default App;
