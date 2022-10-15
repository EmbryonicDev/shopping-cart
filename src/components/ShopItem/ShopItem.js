import './ShopItem.css'

const ShopItem = (props) => {
  const { name, image, price } = props;

  return (
    <div className="shopItem">
      <img src={image} alt={name} />
      <h2 className="itemName">{name}</h2>
      <h3 className="price">$ {price}</h3>
      <form action="#">
        <label htmlFor="num">Add to Cart: </label>
        <input type="number" />
      </form>
    </div>
  )
}

export default ShopItem;