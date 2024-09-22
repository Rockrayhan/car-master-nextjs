import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" my-24 ">
      <div className="grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1 relative">
            <div>
                <Image  src="/assets/images/about_us/person.jpg" height={473} width={460}/>
            </div>
            <div className="absolute border-4 p-2 bg-white rounded-md left-40 top-32">
                <Image className="" src="/assets/images/about_us/parts.jpg" height={332} width={327}/>
            </div>
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <h6 className="text-primary"> About us </h6>
          <h1 className="font-bold text-3xl"> We are qualified & of experience in this field </h1>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          
    <br />
          
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <a href="" className="btn btn-primary">  Get More Info </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
