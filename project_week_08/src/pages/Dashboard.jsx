// pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://67ee9742c11d5ff4bf7a36cc.mockapi.io/metrics").then(res => {
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setMetrics(data);
    });

    axios.get("https://67ee9742c11d5ff4bf7a36cc.mockapi.io/customers").then(res => {
      setCustomers(res.data);
    });
  }, []);

  const columns = [
    {
      name: "Customer",
      selector: row => row.name,
      sortable: true,
      cell: row => (
        <div className="flex items-center gap-2">
          <img src={row.avatar} alt={row.name} className="w-6 h-6 rounded-full" />
          {row.name}
        </div>
      )
    },
    {
      name: "Company",
      selector: row => row.company,
      sortable: true
    },
    {
      name: "Order Value",
      selector: row => row.orderValue,
      sortable: true,
      cell: row => `$${row.orderValue}`
    },
    {
      name: "Order Date",
      selector: row => row.orderDate,
      sortable: true
    },
    {
      name: "City",
      selector: row => row.city,
      sortable: true
    }
  ];

  // Calculate totals from metrics if available
  const totalTurnover = metrics?.turnover || 0;
  const totalProfit = metrics?.profit || 0;
  const totalNewCustomers = metrics?.newCustomers || 0;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-pink-600">Dashboard</h2>

      {/* Overview */}
      {metrics && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-pink-100 p-4 rounded shadow">
            <p className="text-sm text-gray-600">Turnover</p>
            <p className="text-xl font-semibold">${totalTurnover}</p>
            <p className="text-green-500 text-sm">▲ {metrics.turnoverChange}%</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <p className="text-sm text-gray-600">Profit</p>
            <p className="text-xl font-semibold">${totalProfit}</p>
            <p className="text-green-500 text-sm">▲ {metrics.profitChange}%</p>
          </div>
          <div className="bg-indigo-100 p-4 rounded shadow">
            <p className="text-sm text-gray-600">New Customers</p>
            <p className="text-xl font-semibold">{customers.length}</p>
            <p className="text-green-500 text-sm">▲ {metrics.newCustomerChange}%</p>
          </div>
        </div>
      )}

      {/* Detailed Report */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Detailed report</h3>
        <DataTable
          columns={columns}
          data={customers}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5]}
          highlightOnHover
          pointerOnHover
        />
       
      </div>
    </div>
  );
}
