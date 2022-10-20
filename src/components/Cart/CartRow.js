const CartRow = (props) => {
  const { name, quantity, price, totalPrice } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price} Million</td>
      <td>
        {
          totalPrice < 1000 ?
            `$ ${totalPrice} Million` :
            `$ ${totalPrice / 1000} Billion`
        }
      </td>
    </tr>
  )
}

export default CartRow;