import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <h1>Shop Demo</h1>
      <div className="header-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </div>
    </div>
  )
}