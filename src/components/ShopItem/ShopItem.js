import './ShopItem.css'

const ShopItem = (props) => {
  const { name, image, price, itemToCart } = props;

  return (
    <div className="shopItem">
      <img src={image} alt={name} />
      <h2 className="itemName">{name}</h2>
      <h2 className="price">Price: ${price} Million</h2>
      <div className='cartQtyWrap'>
        <input type="number" min='0' max='5' placeholder='0' />
        <button
          onClick={itemToCart}
        >Add</button>
      </div>
    </div>
  )
}

export default ShopItem;