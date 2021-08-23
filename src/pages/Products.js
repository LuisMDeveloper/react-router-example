import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/a-book">A book</Link>
        </li>
        <li>
          <Link to="/products/a-vide-course">A video course</Link>
        </li>
        <li>
          <Link to="/products/a-sub">A subscription</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products
