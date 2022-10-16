import ShopItem from "../ShopItem/ShopItem"
import './Shop.css'

export default function Shop(props) {
  const { items, itemToCart } = props;

  const shopItemElements = items.map((item, index) => {
    return (
      <ShopItem
        name={item.name}
        image={item.image}
        price={item.price}
        key={index}
        itemToCart={() => itemToCart(item.name)}
      />
    )
  })

  return (
    <div className="shop">
      {shopItemElements}
    </div>
  )
}