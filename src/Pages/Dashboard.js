import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  LineElement, 
  PointElement // Add PointElement here to fix the error
);

const Dashboard = () => {
  // Dummy data for the charts
  const monthlyRevenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: [50000, 60000, 75000, 90000, 85000, 95000, 105000, 98000, 87000, 88000, 95000, 110000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        pointBackgroundColor: '#4CAF50',
        tension: 0.4,
      },
    ],
  };

  // Data for Yearly Revenue Breakdown (Pie Chart)
  const yearlyRevenueData = {
    labels: ['Product Sales', 'Service Contracts', 'Consulting', 'Support Plans'],
    datasets: [
      {
        label: 'Revenue Sources',
        data: [500000, 300000, 150000, 50000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF4364', '#259CEB', '#FFB947', '#3DA8A8'],
      },
    ],
  };

  // Data for Active Projects (Bar Chart)
  const activeProjectsData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
    datasets: [
      {
        label: 'Monthly Hours Spent',
        data: [120, 150, 100, 200, 180],
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722', '#9C27B0'],
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Small Cards - Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Users Card */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Users</h3>
          <p className="text-4xl font-bold mt-2">250</p>
        </div>

        {/* Projects Card */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="text-4xl font-bold mt-2">45</p>
        </div>

        {/* Live Projects Card */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Live Projects</h3>
          <p className="text-4xl font-bold mt-2">20</p>
        </div>

        {/* Revenue Card */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Revenue(₹)</h3>
          <p className="text-4xl font-bold mt-2">1,500,00</p>
        </div>
      </div>

      {/* Charts Section */}
     

    </div>
  );
};

export default Dashboard;
