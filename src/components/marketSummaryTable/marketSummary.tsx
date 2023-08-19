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
        Header: 'Percent Change (24h)',
        accessor: 'percentChange', 
        Cell: ({ value }: any) => {
          if (value === undefined) {
            return <span className="na">N/A</span>;
          }
          const changeClass =
            value > 0 ? "positive" : value < 0 ? "negative" : "";

          return (
            <span className={`percent-change ${changeClass}`}>
              {value}%
            </span>
          );
        },
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt',
        Cell: ({ value }) => {
          const dateTime = new Date(value);
          return dateTime.toLocaleString();
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
        {rows.length > 0 ? rows.map((row) => {
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
        }) : <tr className='tbody-no-data'>
        <td colSpan={columns.length}>No Data Found</td>
      </tr>}
      </tbody>
    </table>
  );
};

export default MarketSummaryTable;
