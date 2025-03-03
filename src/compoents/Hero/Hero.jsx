import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Hero/Women.png";
import Image2 from "../../assets/Hero/Shopping.png";
import Image3 from "../../assets/Hero/Sale.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products sale.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit dolorem eius consectetur molestiae nostrum beatae ex aperiam. Rerum, omnis.",
  },
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-1 rounded-3xl rotate-45 -z-9"></div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-in"
                    data-aos-duratin="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="zoom-in"
                    data-aos-duratin="500"
                    data-aos-delay="100"
                    className="text-sm p-2"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duratin="500"
                    data-aos-delay="300"
                  >
                    <button 
                    onClick={()=> handleOrderPopup( )}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image Content Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
