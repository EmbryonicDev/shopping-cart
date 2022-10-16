import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import shopItems from './shopItems';

const RouteSwitch = () => {
  const [shopItemsArr] = useState(shopItems);
  const [cart, setCart] = useState([]);

  const itemToCart = (itemName) => {
    console.log(itemName)

    for (let i = 0; i < shopItemsArr.length; i++) {
      const addItem = shopItemsArr[i];

      if (addItem.name === itemName) {
        if (cart.find(item => item.name === addItem.name)) {
          console.log('item found in cart')
          for (let j = 0; i < cart.length; i++) {
            if (cart[j].name === itemName) {
              const newQty = cart[j].quantity + 1;
              console.log(newQty);
              setCart(prevState => prevState.map(item => {
                return item.name === itemName ?
                  { ...item, quantity: newQty } :
                  item;
              }));
            }
          }
        } else {
          addItem.quantity++;
          setCart(prevState => [...prevState, { ...addItem, quantity: + 1 }])
        }
        console.log(cart)
      }
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={
          <Shop
            items={shopItemsArr}
            itemToCart={itemToCart}
          />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch