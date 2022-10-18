import cartIcon from '../../assets/icons/shopCart.svg';
import './Header.css'

export default function Header(props) {
  const { cartCount } = props;

  return (
    <div className="header">
      <h1>Tycoon's Outlet</h1>
      <div className="header-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
          <img src={cartIcon} alt="Cart Icon" />
          <h4>{cartCount > 0 && cartCount}</h4>
        </a>
      </div>
    </div>
  )
}