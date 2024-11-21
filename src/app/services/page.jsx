import { getServices } from '@/services/getServices';
import React from 'react';
import ServiceCard from '../components/cards/ServiceCard';

const page = async() => {
    const {services} = await getServices();
    return (
        <div>
            <div className="h-100vh">
      <div className="text-center my-10 pt-10">
        <h6 className="text-primary font-bold">Service</h6>
        <h1 className="text-4xl font-bold my-5"> Our Service Area </h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
        </div>
    );
};

export default page;