import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return <h2>Product Details for Product ID: {productId}</h2>;
};

export default ProductDetails;
