import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId, name } = useParams();
  console.log(productId, name); // adventure, herman-melville

  return <div>Now showing product with id - {productId}</div>;
};
