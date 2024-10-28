import React from "react";
import { getServiceDetails, getServices } from "@/services/getServices";
import Image from "next/image";

export const metadata = {
  title: "Details",
  description: "service Details Page",
};

const ServiceDetailsPage = async ({ params }) => {
  const details = await getServiceDetails(params.id);
//   console.log(details);


  const {services} = await getServices();
  console.log(services);
  

  const { title, img, price, description, facility } = details.service;
  console.log(facility);

  // get single data manually
  // const {title} = services.find( (service) => service._id == params.id ) ;

  return (
    <div>
        {/* Details Banner */}
      <div className="details-page-banner h-48 text-white mb-14">
        <h1 className="absolute left-20 top-14 font-bold text-5xl">
          Service Details
        </h1>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button className="relative px-6 py-3 bg-red-600 text-white font-bold text-center">
            <div className="absolute top-0 bottom-0 left-0 w-6 bg-red-600 -skew-x-12"></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 bg-red-600 skew-x-12"></div>
            <span className="relative z-10">Home/Service Details</span>
          </button>
        </div>
      </div>
      {/* ============== */}


    <div className="grid grid-cols-4">
        {/* left side */}
    <div className="col-span-3">
    <div><Image src={img} height={400} width={752} alt={title}/></div>
    <h1> {title} </h1>
    <p>
        {description}
    </p>

    <div className="grid grid-cols-2">
        {
            facility.map( (item ,key) => <div key={key.id} className=" px-3 py-16  bg-gray-300 m-4 p-4 border-t-4 border-t-primary rounded-lg"> 
                    <h2 className="text-2xl font-bold"> {item.name} </h2>
                    <p>{item.details}</p>
                 </div> )
        }
    </div>

    </div>

        <div className="col-span-1">
            <div className="bg-gray-300">
                <h3> Services </h3>
                
                {
                    services.map( (item) => <div key={item._id}> {item.name} </div> )
                }

            </div>
        </div>

    </div>
    </div>
  );
};

export default ServiceDetailsPage;
