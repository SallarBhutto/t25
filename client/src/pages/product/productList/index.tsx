import React from "react";
import Table from 'react-bootstrap/Table';
import Data from '../../../dummyData.json';

function ProductList() {

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>I18N Name</th>
        <th>Model Number</th>
      </tr>
    </thead>
    <tbody>
        {Data.map(row =>  <tr>
        <td>{row.product_id}</td>
        <td>{row.product_name}</td>
        <td>{row.string}</td>
        <td>{row.product_number}</td>
      </tr>)}
    </tbody>
  </Table>
  );
}

export default ProductList;
