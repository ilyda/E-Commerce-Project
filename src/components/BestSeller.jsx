import React, { useContext} from "react";
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from "../context/ShopContext";


const BestSeller = ({ color }) => {
  const { products } = useContext(ShopContext);


  if (!products.length)
    return <div className="text-center mt-20">Loading...</div>;
  
    return (
       <section className={`py-20 ${color ? "bg-[#FAFAFA]" : ""}`}>
            <div className="mb-12">
                <Title 
                    text1={"BESTSELLER PRODUCTS"} 
                    text2={"Problems trying to resolve the conflict between"} 
                />
            </div>

            <div className="container mx-auto px-4 sm:px-10 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[60px] justify-items-center">
                    {products.slice(0, 8).map((item) => (
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            image={item.images[0].url}
                            price={item.price.toFixed(2)}
                            name={item.name}
                            second_name={item.description}
                            discounted={item.price.toFixed(2)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestSeller