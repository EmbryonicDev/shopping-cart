const CartRow = (props) => {
  const { name, quantity, price, totalPrice, handleCartInputChange, deleteItem } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          type="number"
          name={name}
          min='0'
          max='5'
          value={quantity}
          onChange={handleCartInputChange}
        />
        <button
          onClick={deleteItem}
        >X
        </button>
      </td>
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