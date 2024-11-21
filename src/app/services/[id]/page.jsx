import React from "react";
import { getServiceDetails, getServices } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Service Details",
  description: "service Details Page",
};

const ServiceDetailsPage = async ({ params }) => {
  const details = await getServiceDetails(params.id);
  //   console.log(details);

  const { services } = await getServices();
  console.log(services, "showing all services");

  const {_id ,title, img, price, description, facility } = details.service;
  // console.log(facility);

  // get single data manually
  // const {title} = services.find( (service) => service._id == params.id ) ;

  return (
    <div className="container">
      {/* Details Banner */}
      <div className="details-page-banner h-48 text-white mb-14">
        <h1 className="absolute left-20 top-14 font-bold text-5xl">
          Service Details
        </h1>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button className="relative px-6 py-3 bg-red-600 text-white font-bold text-center">
            <div className="absolute top-0 bottom-0 left-0 w-6 bg-red-600 -skew-x-12"></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 bg-red-600 skew-x-12"></div>
            {/* <span className="relative z-10">Home/Service Details</span> */}
            <span className="relative z-10">Home / {metadata.title}  </span>
          </button>
        </div>
      </div>
      {/* ============== */}

      <div className="grid grid-cols-4 gap-2">
        {/* left side */}
        <div className="col-span-3 p-4">
          <div>
            <Image
              className="w-full"
              src={img}
              height={400}
              width={752}
              alt={title}
            />
          </div>
          <h1 className="text-4xl font-bold my-3"> {title} </h1>
          <p>{description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {facility.map((item, key) => (
              <div
                key={key.id}
                className="py-16  bg-gray-300 p-4  border-t-4 border-t-primary rounded-lg"
              >
                <h2 className="text-2xl font-bold"> {item.name} </h2>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 p-4">
        <div className="bg-gray-300 p-4">
  <h3 className="text-2xl font-bold my-3"> Services </h3>

  {services?.map((item) => (
    <div
      className="group   bg-white p-2 rounded-sm my-3 py-3 hover:bg-primary hover:text-white cursor-pointer"
      key={item._id}
    >
      <Link className="flex justify-between" href={`/services/${item._id}`}> 
      <h4>{item.title}</h4>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary group-hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span> </Link>
    </div>
  ))}

</div>



  <h1 className="text-3xl font-bold my-4"> Price: {price} </h1>

  <Link href={`/checkout/${_id}`}> <button className="btn btn-primary w-full"> Proceed Checkout </button> </Link>

        </div>


      </div>
    </div>
  );
};

export default ServiceDetailsPage;
