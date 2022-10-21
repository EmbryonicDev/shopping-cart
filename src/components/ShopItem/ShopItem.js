import './ShopItem.css'

const ShopItem = (props) => {
  const { name, image, price, itemToCart, handleInputChange, quantity, warning } = props;
  let style;

  if (warning) {
    style = {
      color: 'black',
      background: 'yellow',
      borderRadius: '12px',
      border: 'none'
    };
  } else {
    style = { color: 'transparent' };
  }

  return (
    <div className="shopItem">
      <img src={image} alt={name} />
      <h2 className="itemName">{name}</h2>
      <h2 className="price">Price: ${price / 1000000} Million</h2>
      <div className='cartQtyWrap'>
        <input
          placeholder='0'
          name={name}
          type="number"
          min='0'
          max='5'
          value={quantity}
          onChange={handleInputChange}
        />
        <button
          onClick={itemToCart}
        >Add</button>
      </div>
      <div className='warning' style={style}>
        <h3>Only 5 of Each Item Allowed</h3>
      </div>
    </div>
  )
}

export default ShopItem;