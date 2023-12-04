import '../Table/Table.css';
import React from 'react';
// import * as React from 'react';
import {useTable} from 'react-table';
import fakeData from './MOCK_DATA.json';

const Table = () => {
    const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Parameter",
        accessor: "parameter",
      },
      {
        Header: "MIN Value",
        accessor: "min_value",
      },
      {
        Header: "Max Value",
        accessor: "max_value",
      },
      {
        Header: "Current Value",
        accessor: "current_value",
      },
      {
        Header: "Suggested Action",
      },
      {
        Header: "Quantity",
        accessor: "actuator_status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
    
    return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}
export default Table;