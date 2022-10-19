import CartRow from "./CartRow";
import './Cart.css'

export default function Cart(props) {
  const { cartItems } = props;
  const subTotal = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const cartElements = cartItems.map((item, index) => {
    return (
      <CartRow
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        totalPrice={item.totalPrice}
        key={index}
      />
    )
  })

  return (
    <div className="cart">
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
            <td>${subTotal / 1000000} Million</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}