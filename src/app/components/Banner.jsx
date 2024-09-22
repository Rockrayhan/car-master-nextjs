import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Price For Car Servicing Affordable",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Price For Car Affordable Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Servicing Price For Car",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];

  return (
    <div className="">
      <div className="carousel text-white">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            style={{
              backgroundImage: `linear-gradient( rgba(21, 21, 21, 1) , rgba(21, 21, 21, 0) ), url(assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            className="carousel-item relative w-full h-[90vh] "
          >
            <div className="flex flex-col justify-center gap-10  p-10">
              <h1 className="font-bold text-5xl"> {banner.title} </h1>

              <p> {banner.description} </p>
           
            <div>
              <button className="btn btn-primary me-3"> Discover More</button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black"> Latest Project </button>
            </div>

            </div>

            <div className="absolute flex gap-6 -translate-y-1/2 transform justify-between bottom-4 right-5 ">
                <a href={banner.prev} className="btn btn-circle hover:bg-primary">
                  ❮
                </a>
                <a href={banner.next} className="btn btn-circle hover:bg-primary">
                  ❯
                </a>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
