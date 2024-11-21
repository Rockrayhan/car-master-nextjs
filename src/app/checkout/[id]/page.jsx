"use client";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
// import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from "react";

// export const metadata = {
//     title: "Checkout Page",
//     description: "Checkout Details Page",
//   };

const CheckOutPage =  ({ params }) => {

  const [ service , setService ] = useState({}) ;

  const loadService = async() =>{
    const details = await getServiceDetails(params.id);
    console.log(details?.service + "checkout page");
    setService(details?.service)
  } ;



  const { _id, title, img, price, description, facility } = service || {} ;
  const session = useSession();
  console.log(session);
  
  const userName = session?.data?.user?.name;
  const firstName = userName?.split(" ")[0]; 
  const lastName = userName?.split(" ")[1]; 
  const userEmail = session?.data?.user?.email;

  const bookingHandler = async(e) => {
    e.preventDefault();
    const newBooking = {
      name : userName,
      email : userEmail,
      price: price ,
      phone: e.target.phone.value,
      date: e.target.date.value,
      serviceTitle: title,
      serviceID : _id,
    }

    const resp = await fetch('http://localhost:3000/checkout/api/new-booking',{
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type" : "application/json"
      }
      
    })
    console.log(resp);
  }

  useEffect( ()=> {
    loadService() ;
  },[params] )


  return (
    <div>
      {/* Details Banner */}
      <div className="details-page-banner h-48 text-white mb-14">
        <h1 className="absolute left-20 top-14 font-bold text-5xl">
          Checkout Page
        </h1>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button className="relative px-6 py-3 bg-red-600 text-white font-bold text-center">
            <div className="absolute top-0 bottom-0 left-0 w-6 bg-red-600 -skew-x-12"></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 bg-red-600 skew-x-12"></div>
            <span className="relative z-10">Home / Checkout Page </span>
          </button>
        </div>
      </div>
      {/* ============== */}

      <h1 className="text-center text-2xl font-bold my-4">
        
        Checkout for {title}
      </h1>

      <div className="bg-gray-200 center py-10">
        <form action="" className="w-2/4" onSubmit={bookingHandler}>
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="First name"
              defaultValue={firstName}
              className="px-4 py-3   rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-4 py-3  rounded-lg w-full"
              defaultValue={lastName}
            />
          </div>

          <div className="flex gap-6 my-4">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="px-4 py-3 w-1/2 rounded-lg"

            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 w-1/2 rounded-lg"
              defaultValue={userEmail}
            />
          </div>

          <div>
            <label htmlFor="date"> Date: </label>
            <input defaultValue={new Date().getDate()} type="date" name="date"  className="px-4 py-4 w-full mb-3"/>
          </div>
          
          <div>
            <label htmlFor="Price"> Price : </label>
            <input defaultValue={price} readOnly type="number" name="price"  className="px-4 py-4 w-full mb-3"/>
          </div>

          <div>
            <textarea
              name="msg"
              id=""
              rows="5"
              className="w-full p-2 rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="btn btn-primary w-full mt-6">
            
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
