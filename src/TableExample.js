import React from 'react';

const TableRow = props => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
    </tr>
)

export default TableRow;