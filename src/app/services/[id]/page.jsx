import React from 'react';
import { getServiceDetails } from '@/services/getServices';

export const metadata = {
    title : "Details",
    description: "service Details Page"
}

const ServiceDetailsPage =  async ({params}) => {
    const details = await getServiceDetails(params.id)
    console.log(details);
    
    const { title, img, price, description, facility } = details.service ;
    console.log(title);
    

    

    // get single data manually 
    // const {title} = services.find( (service) => service._id == params.id ) ;

    return (
        <div>
            <h1> Details page </h1>
            {title}
        </div>
    );
};

export default ServiceDetailsPage;