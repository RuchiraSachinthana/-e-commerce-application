import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import {addCart} from "../redux/action"; 

const Cart = () => {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();


  const handleClose =  (product) => {
    dispatch(delCart(product))
  }

  const handleButton =  (product) => {
    dispatch(addCart(product))
  }

  const addProduct = (product) => {
    return (
      <div className="px-4 my-5 bg-primary rounded-3" key={product.id}>
        <div className="container py-4">
          <button  onClick={() => handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={product.image} alt={product.title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X LKR. {product.price} = LKR. {product.qty * product.price}
            </p>
            <button className="btn btn-primary me-4"
            onClick={() => handleButton(product)}>
              <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-primary"
            onClick={() => handleButton(product)}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
           </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-primary rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
          <h3> Your Cart is Empty! </h3>
          </div>
        </div>
      </div>
      );
  }

  return ( 
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map( addProduct)}
    </>
  );
};

export default Cart;
