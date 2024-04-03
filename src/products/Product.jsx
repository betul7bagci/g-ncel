import React from "react";

function Product() {
  return (
    <>
      <h1 className="text-center">{product.title}</h1>
      {product.images && product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt=""
          className="w-50 mx-auto d-block img-thumbnail"
        />
      )}
      <p className="mt-3 mx-5">{product.description}</p>
    </>
  );
}

export default Product;
