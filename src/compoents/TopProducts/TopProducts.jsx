import React from "react";
import Imag1 from "../../assets/Shirt/shirt.png";
import Imag2 from "../../assets/Shirt/shirt2.png";
import Imag3 from "../../assets/Shirt/shirt3.png";
import { FaStar } from "react-icons/fa";



const ProductsData = [
  {
    id: 1,
    img: Imag1,
    title: "Casual Waer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
  {
    id: 2,
    img: Imag2,
    title: "Printed Shirts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
  {
    id: 3,
    img: Imag3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-28">
          <p data-aos="fade-up" className="text-primary text-sm">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            mollitia cum corrupti.
          </p>
        </div>
        {/* body section */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div 
            data-aos="zoom-in"
            className="rounded-2xl bg-white drak:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                       hover:text-white relative shadow-lg duration-500 group max-w-[300px]"
            >
                {/* image Section */}
             <div className="h-[100px]">
                <img src={data.img} alt="" 
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
             </div>
             {/* details section */}
             <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-semibold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                <button 
                className="bg-primary hover:scale-105 duration-300 text-white p[y-1 px-4 rounded-full mt-4
                group-hover:bg-white group-hover:text-primary dark:hover:text-white"
                onClick={handleOrderPopup}
                >
                    Order Now
                </button>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
