import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-7'>
            <div className='text-center my-5'>
                <p className="text-2xl text-orange-500 font-bold">Service</p>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-2xl'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-5 mt-10 mb-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
            <div className='ml-80'>
                <button className="btn btn-warning ml-72 mb-12">More Service</button>
            </div>
        </div>
    );
};

export default Services;