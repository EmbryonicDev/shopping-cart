const CartRow = (props) => {
  const { name, quantity, price, totalPrice } = props
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price / 1000000} Million</td>
      <td>${totalPrice / 1000000} Million</td>
    </tr>
  )
}

export default CartRow;