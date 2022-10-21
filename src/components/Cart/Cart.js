import CartRow from "./CartRow";
import EmptyCart from "../EmptyCart/EmptyCart";
import './Cart.css'

export default function Cart(props) {
  const { cartItems, handleCartInputChange, deleteItem } = props;
  let subTotal = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0) / 1000000;

  let millOrBill;
  subTotal < 1000 ?
    millOrBill = 'Million' :
    millOrBill = 'Billion';

  // to display total in billions
  if (subTotal > 1000) subTotal = subTotal / 1000;

  // 2 x decimals when decimals are present
  if (subTotal % 1 !== 0) {
    subTotal = subTotal.toFixed(2);
  }

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
              <td>${subTotal} {millOrBill}</td>
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