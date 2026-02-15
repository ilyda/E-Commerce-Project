import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductDetailItem from "../components/ProductDetailItem";
import BreadCrumb from "../components/BreadCrumb";
import BestSeller from "../components/BestSeller";
import Brands from "../components/Brands";
import Information from "../components/Information";

const ProductDetail = () => {
  const { id } = useParams();
  const { fetchProductById } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
useEffect(() => {
  const load = async () => {
    const data = await fetchProductById(id);
    setProduct(data);
  };

  load();
}, [id]);


  if (!product) return <div className="text-center mt-20">Loading...</div>;


    return (
      <>
       <BreadCrumb />
      <ProductDetailItem product={product} />
      <Information></Information>
      <BestSeller color />
      <Brands />
      </>

      );
};

export default ProductDetail;
