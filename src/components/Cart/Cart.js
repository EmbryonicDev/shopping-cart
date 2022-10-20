import CartRow from "./CartRow";
import EmptyCart from "../EmptyCart/EmptyCart";
import './Cart.css'

export default function Cart(props) {
  const { cartItems, handleCartInputChange, deleteItem } = props;
  const subTotal = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0) / 1000000;

  const cartElements = cartItems.map((item, index) => {
    return (
      <CartRow
        name={item.name}
        quantity={item.quantity}
        price={item.price / 1000000}
        totalPrice={item.totalPrice / 1000000}
        key={index}
        handleCartInputChange={handleCartInputChange}
        deleteItem={() => deleteItem(item.name)}
      />
    )
  })

  return (
    <div className="cart">
      {
        cartItems.length > 0 &&
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartElements}
            <tr>
              <td></td>
              <td></td>
              <td>Sub-Total</td>
              <td>
                {
                  subTotal < 1000 ?
                    `$ ${subTotal} Million` :
                    `$ ${subTotal / 1000} Billion`
                }
              </td>
            </tr>
          </tbody>
        </table>
      }
      {
        cartItems.length < 1 &&
        <EmptyCart />
      }
    </div>
  )
}