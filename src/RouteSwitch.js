import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import shopItems from './shopItems';

const RouteSwitch = () => {
  const [shopItemsArr] = useState(shopItems);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart)

  }, [cart])

  const itemToCart = (itemName) => {
    for (let i = 0; i < shopItemsArr.length; i++) {
      const addItem = shopItemsArr[i];

      if (addItem.name === itemName) {
        if (cart.find(item => item.name === addItem.name)) {
          setCart(prevState => prevState.map(obj => {
            return obj.name === itemName ?
              {
                ...obj,
                quantity: obj.quantity + 1,
                totalPrice: (obj.quantity + 1) * obj.price
              } :
              obj
          }));
        } else {
          setCart(prevState => [
            ...prevState,
            {
              ...addItem,
              quantity: 1,
              totalPrice: addItem.price
            }]);
        }
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