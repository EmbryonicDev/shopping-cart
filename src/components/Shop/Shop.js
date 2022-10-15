import shopItems from "../../shopItems"
import ShopItem from "../ShopItem/ShopItem"

export default function Shop() {

  const shopItemElements = shopItems.map(item => {
    return (
      <ShopItem
        name={item.name}
        image={item.image}
        price={item.price}
      />
    )
  })

  return (
    <div className="shop">
      {shopItemElements}
    </div>
  )
}