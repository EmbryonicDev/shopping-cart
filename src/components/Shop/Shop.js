import { useState } from "react";
import ShopItem from "../ShopItem/ShopItem"
import './Shop.css'

export default function Shop(props) {
  const { items, itemToCart, handleInputChange } = props;

  const shopItemElements = items.map((item, index) => {
    return (
      <ShopItem
        name={item.name}
        image={item.image}
        price={item.price}
        key={index}
        quantity={item.quantity}
        handleInputChange={handleInputChange}
        itemToCart={() => itemToCart(item.name)}
      />
    )
  })

  return (
    <div className="shop">
      {shopItemElements}
    </div>
  )
}