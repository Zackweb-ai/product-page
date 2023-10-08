import React from "react";
import { useState } from "react";
import { useCart } from "../CartContext";
import cartIcon from "../resources/images/icon-cart.svg";
import avatar from "../resources/images/image-avatar.png";
import burger from "../resources/images/icon-menu.svg";
import close from "../resources/images/icon-close.svg";
import main from "../resources/images/image-product-1-thumbnail.jpg";
import trash from "../resources/images/icon-delete.svg";

export const Nav = () => {
  const { cart, removeFromCart } = useCart();
  const { counter } = useCart();
  
  let [displayCart, setDisplayCart] = useState(false);
  return (
    <div className="nav">
      <div className="pad">
      <div className="nav-laptop">
        <div className="border">
          <div className="nav-start">
            <p className="Name">sneakers</p>
            <ul className="nav-menu">
              <li>
                <a href="#">Collecions</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-end">
            <div className="items">{cart.length}</div>
            <img className="cart" src={cartIcon} alt="cart" onClick={() => setDisplayCart(!displayCart)} />
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      </div>
      <div className="nav-mobile">
        <div className="chade active"></div>
        <div className="side active">
          <img className="close" src={close} alt="close" />
          <ul className="nav-menu">
            <li>
              <a href="#">Collecions</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-start">
          <div className="start">
            <img className="burger" src={burger} alt="" />
            <p className="Name">sneakers</p>
          </div>
        </div>
        <div className="nav-end">
         <img
            className="cart"
            src={cartIcon}
            alt="cart"
          />
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
      {displayCart && (
        <div className="cart_items">
          <p className="cart-top">Cart</p>
          {cart.length === 0 ? (
            <div className="empty">Your Cart is empty</div>
          ) : (
            cart.map((product) => (
              <>
                <div className="top">
                  <div className="parts">
                    <img src={product[0].image} alt="" />
                    <div className="cartInfo">
                      <p className="cart-title">{product[0].title}</p>
                      <div className="total">
                        <p className="priceDisplay">${product[0].price}.00 x {counter}</p>
                        <p>${product[0].price * counter}.00</p>
                      </div>
                    </div>
                    <img className="trash" src={trash} alt="" onClick={() => removeFromCart(product[0].id)} />
                  </div>
                </div>
                <div className="bottom">
                  <button className="cart-btn">Checkout</button>
                </div>
              </>
            ))
          )}

          <div></div>
        </div>
      )}
    </div>
  );
};
