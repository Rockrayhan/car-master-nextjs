import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, img, price, description } = service;
  return (
    <div className="col-span-1 my-3">
      <div className="card bg-base-100 w-96 shadow-xl border-2 hover:border-primary cursor-pointer">
        <figure></figure>
        <div className="card-body">
          <figure>
            <Image src={img} height={208} width={314} />
          </figure>
          <h2 className="card-title"> {title} </h2>
          <div className="card-actions justify-between text-primary font-bold">
            <span> price : $ {price} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
