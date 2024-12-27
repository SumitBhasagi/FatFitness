import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Akhilesh Ghanur",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veniam similique, eum unde iste atque aliquam aspernatur facilis voluptas molestiae delectus quo dolore dolores officia quam quisquam, ullam quasi laborum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Pratik Devarmani",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veniam similique, eum unde iste atque aliquam aspernatur facilis voluptas molestiae delectus quo dolore dolores officia quam quisquam, ullam quasi laborum.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 3,
    name: "Swapnil Swami",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veniam similique, eum unde iste atque aliquam aspernatur facilis voluptas molestiae delectus quo dolore dolores officia quam quisquam, ullam quasi laborum.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "Yash Hotkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veniam similique, eum unde iste atque aliquam aspernatur facilis voluptas molestiae delectus quo dolore dolores officia quam quisquam, ullam quasi laborum.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Abhayraj Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veniam similique, eum unde iste atque aliquam aspernatur facilis voluptas molestiae delectus quo dolore dolores officia quam quisquam, ullam quasi laborum.",
    img: "https://picsum.photos/105/105",
  },
];
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div>
          <h1 className="text-3xl font-bold">Testimonial</h1>
        </div>
        {/* testimonial section */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shhadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative ">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <p className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-9xl text-gray-500 absolute top-0 right-0 font-serif text-primary/20">
                    **
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
