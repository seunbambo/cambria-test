import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableWrapper } from './TableWrapper.js';

const Table = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrderList = async () => {
      const response = await axios.get(
        'https://app.fakejson.com/q/yXrzyVRD?token=ybH1QpWU68FqChnohPbqVA'
      );
      setOrderList(response.data.orders);
    };
    getOrderList();
  }, []);

  console.log('orderList', orderList);
  return (
    <TableWrapper>
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
          {orderList.map((order) => {
            return (
              <tr key={order.orderId}>
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
    </TableWrapper>
  );
};

export default Table;
