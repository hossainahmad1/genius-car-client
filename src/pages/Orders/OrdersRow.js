import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleUpdate }) => {
    const { _id, customer, status, service, price, serviceName } = order;
    const [serviceOrders, setServiceOrders] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceOrders(data))
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                serviceOrders?.img &&
                                <img src={serviceOrders?.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button
                    onClick={() => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}
                </button>
            </th>
        </tr>
    );
};

export default OrdersRow;