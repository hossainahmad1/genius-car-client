import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { title, _id, price, } = useLoaderData();


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.vlaue;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            price,
            phone,
            email,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('added data successfully')
                    console.log(data)
                    form.reset()
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2 className='text-3xl'>Yor are about to Orders: {title}</h2>
            <h3 className='text-2xl'>Price:${price}</h3>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-secondary w-full" />
                    <input type="text" name='lastName' placeholder="Last name" className="input input-bordered input-secondary w-full" />
                    <input type="text" name='phone' placeholder="Your phone" className="input input-bordered input-secondary w-full" required />
                    <input type="email" name='email' placeholder="your email" defaultValue={user?.email} readOnly className="input input-bordered input-secondary w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                <input className='btn mb-4' type="submit" value="place your orders" />
            </form>
        </div>
    );
};

export default CheckOut;