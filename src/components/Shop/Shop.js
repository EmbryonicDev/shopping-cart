import ShopItem from "../ShopItem/ShopItem"
import './Shop.css'

export default function Shop(props) {
  const { items } = props;

  const shopItemElements = items.map((item, index) => {
    return (
      <ShopItem
        name={item.name}
        image={item.image}
        price={item.price}
        key={index}
      />
    )
  })

  return (
    <div className="shop">
      {shopItemElements}
    </div>
  )
}