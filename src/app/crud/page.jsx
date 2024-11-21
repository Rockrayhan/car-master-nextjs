"use client" ;
import React, { useState } from 'react';

const page = () => {
    const [ task , setTask ] = useState([]) ;
    const [ tasks , setTasks ] = useState([]) ;

    const taskSubmit = (e) => {
        e.preventDefault() ;
    }
    return (
        <div className='h-screen bg-teal-100'>
          <h1 className='text-center font-bold text-teal-700 py-10 text-3xl'>  This is crud page </h1>          
          
          <div className='p-10'>
            <form action="" onSubmit={taskSubmit}>
                <input type="text" name='task' placeholder='Enter Task' className='p-4'/>
            </form>
          </div>
          </div>
    );
};

export default page;