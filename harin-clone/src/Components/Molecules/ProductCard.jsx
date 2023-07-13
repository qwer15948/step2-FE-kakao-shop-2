import Card from "../Atoms/Card";
import { comma } from "../../Utils/convert";
import Photo from "../Atoms/Photo"

const ProductCard = ({ key, product }) => {
  return (
    <Card to={`/product/${key}`}>
      <Photo src={product.image} alt={product.productName} />
      <div className="p-4 pt-7 font-bold">{product.productName}</div>
      <div className="p-4 pt-3 pb-7">{comma(product.price)}원</div>
    </Card>
  )
}

export default ProductCard;