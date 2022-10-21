import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import shopItems from './shopItems';
import Header from './components/Header/Header';

const RouteSwitch = () => {
  const [shopItemsArr, setShopItemsArr] = useState(shopItems);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cart.length > -1) {
      setCartCount(cart.reduce((acc, curr) => acc + curr.quantity, 0));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setShopItemsArr(prevState => prevState.map(item => {
      return item.name === name ?
        {
          ...item,
          quantity: Number(value)
        } :
        item
    }));
  }

  const handleCartInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setCart(prevState => prevState.map(item => {
      return item.name === name ?
        {
          ...item,
          quantity: Number(value),
          totalPrice: item.price * Number(value)
        } :
        item
    }));
  }

  const deleteItem = (name) => {
    const index = cart.map(item => item.name).indexOf(name);
    const tempArr = cart.splice(0);
    tempArr.splice(index, 1);
    setCart(tempArr);
  }

  const itemToCart = (itemName) => {
    for (let i = 0; i < shopItemsArr.length; i++) {
      const addItem = shopItemsArr[i];

      if (addItem.name === itemName) {
        if (addItem.quantity > 0) {
          if (cart.find(item => item.name === addItem.name)) {
            setCart(prevState => prevState.map(obj => {
              if (obj.name === itemName) {
                let newQuantity = addItem.quantity + obj.quantity;

                if (newQuantity > 5) {
                  newQuantity = 5;
                }

                return {
                  ...obj,
                  quantity: newQuantity,
                  totalPrice: newQuantity * obj.price
                }
              } else {
                return obj
              }
            }));
          }
          else {
            setCart(prevState => [
              ...prevState,
              {
                ...addItem,
                totalPrice: addItem.quantity * addItem.price
              }]);
          }
          // Reset shop item input field to zero
          setShopItemsArr(prevState => prevState.map(obj => {
            return obj.name === addItem.name ?
              { ...obj, quantity: 0 } :
              obj;
          }));
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }
  }

  return (
    <>
      <Header
        cartCount={cartCount}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={
            <Shop
              items={shopItemsArr}
              itemToCart={itemToCart}
              handleInputChange={handleInputChange}
            />}
          />
          <Route path="/cart" element={
            <Cart
              cartItems={cart}
              handleCartInputChange={handleCartInputChange}
              deleteItem={deleteItem}
            />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch