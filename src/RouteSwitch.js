import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import shopItems from './shopItems';

const RouteSwitch = () => {
  const [shopItemsArr] = useState(shopItems);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={
          <Shop
            items={shopItemsArr}
          />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch