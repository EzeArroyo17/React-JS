import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <div className="item">
        <Link className="item" to={`/detail/${product.id}`}>
      <img className="image-item" src={product.image}/>
    </Link>
        </div>
  )
}

export default Item