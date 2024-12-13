import React from 'react'
import Img1 from "../../assets/website/women/women.png";
import Img2 from "../../assets/website/women/women2.jpg";
import Img3 from "../../assets/website/women/women3.jpg";
import Img4 from "../../assets/website/women/women4.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethic",
        rating: 5.0,
        colour: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        colour: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        colour: "Broun",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-shirts",
        rating: 4.4,
        colour: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Fasion T-shirts",
        rating: 4.6,
        colour: "Pink",
        aosDelay: "800"
    },
    
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-primary text-sm'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium eaque</p>
        </div>
         {/* Body Section */}
         <div>
            <div
            className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'
            >
            {/* card section */}
            {
                ProductsData.map((data) => (
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id} className='space-y-3'>
                        <img src={data.img} alt="" 
                        className='h-[220px] w-[150px] object-cover rounded-md'
                        />
                        <span className='font-semibold'>{data.title}</span><br />
                        <span className='text-sm text-gray-600'>{data.colour}</span><br />
                        <div className='flex justify-start items-center gap-1'><FaStar className='text-yellow-500'/>{data.rating}</div>
                    </div>
                ))
            }

            </div>
         </div>
         <div className='flex justify-center '>
            <button className=' text-center mt-10 py-1 px-5 rounded-md bg-primary text-white font-semibold cursor-pointer'>View All Button</button>
         </div>
      </div>
    </div>
  )
}

export default Products
