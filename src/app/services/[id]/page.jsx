import React from 'react';
import { services } from '../../../lib/services'; 

const ServiceDetailsPage =  ({params}) => {
    console.log(params._id);
    // const details = await services(params.id) ;
    // console.log(details);
    
    const {title} = services.find( (service) => service._id == params.id ) ;

    return (
        <div>
            <h1> Details page </h1>
            {title}
        </div>
    );
};

export default ServiceDetailsPage;