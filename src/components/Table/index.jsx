import React from 'react';
import './styles.css';

const Table = () => {
  const orders = [
    {
      orderId: '32342342423434212',
      dateCreated: 'Aug 2021',
      orderType: 'Slab',
      address: {
        street: '1, Surface LLC',
        city: '305 Seaboard Lane, Suit 319',
        zipCode: 'Franklin, TN 37067',
      },
      amount: '2213.00',
      status: 'Order Received',
    },
    {
      orderId: '32342342423434212',
      dateCreated: 'Aug 2021',
      orderType: 'Slab',
      address: {
        street: '1, Surface LLC',
        city: '305 Seaboard Lane, Suit 319',
        zipCode: 'Franklin, TN 37067',
      },
      amount: '2213.00',
      status: 'Pending',
    },
    {
      orderId: '32342342423434212',
      dateCreated: 'Aug 2021',
      orderType: 'Slab',
      address: {
        street: '1, Surface LLC',
        city: '305 Seaboard Lane, Suit 319',
        zipCode: 'Franklin, TN 37067',
      },
      amount: '2213.00',
      status: 'Order Received',
    },
  ];
  return (
    <div>
      <table className='table table-striped table-hover'>
        <thead>
          <tr className='table-heading'>
            <th className='table-heading-data'>Date</th>
            <th className='table-heading-data'>Details</th>
            <th className='table-heading-data'>Amount</th>
            <th className='table-heading-data'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={orders.orderId}>
                <td>
                  <span
                    className='fas fa-calendar-minus'
                    style={{ color: '#000' }}
                  ></span>
                  {order.dateCreated}
                </td>
                <td>
                  <div className='details-column'>
                    <span className='text-muted'>Order #: </span>
                    <span className=''>{order.orderId}</span>
                  </div>
                  <div className='details-column'>
                    <span className='text-muted'>Ship To: </span>
                    <span className=''>
                      {order.address.street} . {order.address.city} .{' '}
                      {order.address.zipCode}
                    </span>
                  </div>
                  <div className='details-column'>
                    <span className='text-muted'>Order Type: </span>
                    <span className=''>{order.orderType}</span>
                  </div>
                </td>
                <td>${order.amount}</td>
                <td>
                  <span className='badge badge-warning'>{order.status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
