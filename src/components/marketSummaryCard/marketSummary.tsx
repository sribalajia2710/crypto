// components/MarketSummaryTable.tsx
import React from 'react';
import { useTable, Column } from 'react-table';
import './MarketSummary.css';

interface MarketSummary {
  symbol: string;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
  percentChange?: number;
  updatedAt: string;
}

interface MarketSummaryTableProps {
  data: MarketSummary[];
}

const MarketSummaryTable: React.FC<MarketSummaryTableProps> = ({ data }) => {
  const columns: Column<MarketSummary>[] = React.useMemo(
    () => [
      {
        Header: 'Symbol',
        accessor: 'symbol', 
      },
      {
        Header: 'High',
        accessor: 'high', 
        Cell: ({ value }) => parseFloat(value).toFixed(4).toString(),
      },
      {
        Header: 'Low',
        accessor: 'low', 
        Cell: ({ value }) => parseFloat(value).toFixed(4).toString(),
      },
      {
        Header: 'Volume',
        accessor: 'volume', 
        Cell: ({ value }) => parseFloat(value).toFixed(4).toString(),
      },
      {
        Header: 'Quote Volume',
        accessor: 'quoteVolume', 
        Cell: ({ value }) => parseFloat(value).toFixed(4).toString(),
      },
      {
        Header: 'Percent Change',
        accessor: 'percentChange', 
        Cell: ({ value }: any) => {
          if(value === undefined) {
            return 'N/A';
          }
          return `${value}%`;
        },
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt',
        Cell: ({ value }) => {
          const dateTime = new Date(value);
          return dateTime.toLocaleString(); // Convert to local date and time format
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MarketSummaryTable;
