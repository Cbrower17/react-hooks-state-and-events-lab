import React, { useState } from "react";

function Item({ name, category }) {
  const[inCart, setInCart] = useState(false)
  function handleClick() {
    setInCart((inCart) => !inCart);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart?"in-cart":"not-in-cart"} onClick={handleClick}>{inCart?"In cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
