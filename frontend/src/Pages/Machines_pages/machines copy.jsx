// // src/pages/machines_pages/WeldingRobot.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const WeldingRobot = () => {
//     const [sensorData, setSensorData] = useState(null);
//     const [error, setError] = useState(null);

//     // Define your API URL here
//     const url = 'https://machinesystemwebhook.loca.lt/machine/welding_robot/'; // Update with your actual API endpoint

//     useEffect(() => {
//         const fetchSensorData = async () => {
//             try {
//                 const response = await axios.get(url);
//                 if (response.data.status === 'success') {
//                     setSensorData(response.data.data);
//                 } else {
//                     setError('Failed to fetch data.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError('Error fetching data from the API.');
//             }
//         };

//         fetchSensorData();
//     }, [url]);

//     return (
//         <div>
//             <h1>Welding Robot Sensor Data</h1>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {sensorData ? (
//                 <div>
//                     <p>Machine ID: {sensorData.machine_id}</p>
//                     <p>Weld Temperature: {sensorData.weld_temperature}°C</p>
//                     <p>Weld Current: {sensorData.weld_current}A</p>
//                     <p>Weld Voltage: {sensorData.weld_voltage}V</p>
//                     <p>Timestamp: {sensorData.timestamp}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default WeldingRobot;
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataLine = [
  { name: 'Sep', value1: 400, value2: 240 },
  { name: 'Oct', value1: 300, value2: 139 },
  { name: 'Nov', value1: 200, value2: 980 },
  { name: 'Dec', value1: 278, value2: 390 },
  { name: 'Jan', value1: 189, value2: 480 },
  { name: 'Feb', value1: 239, value2: 380 },
];

const dataBar = [
  { name: '17', value1: 12, value2: 24 },
  { name: '18', value1: 18, value2: 22 },
  { name: '19', value1: 30, value2: 32 },
  { name: '20', value1: 25, value2: 28 },
  { name: '21', value1: 35, value2: 30 },
  { name: '22', value1: 40, value2: 35 },
  { name: '23', value1: 50, value2: 45 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Beautiful Navbar for Tabs */}
      <div className="tab-menu">
        <button className="active">Welding Robot</button>
        <button>Stamping Presses</button>
        <button>Painting Robots</button>
        <button>AGVs</button>
        <button>CNC</button>
        <button>Leak Test Machine</button>
      </div>
      
      <div className="chart-grid">
        {/* Line Charts with Threshold */}
        <ChartBlock title="Voltage" data={dataLine} threshold={300} />
        <ChartBlock title="Vibration" data={dataLine} threshold={250} />
        <ChartBlock title="Temperature" data={dataLine} threshold={350} />
        <ChartBlock title="Power Consumption" data={dataLine} threshold={450} />
        <ChartBlock title="Current" data={dataLine} threshold={400} />
        <ChartBlock title="Pressure" data={dataLine} threshold={200} />
        
        {/* Bar Charts */}
        <BarChartBlock title="Gas Flow Rate" data={dataBar} />
        <BarChartBlock title="Wire Feed Rate" data={dataBar} />
      </div>
    </div>
  );
};

// Updated ChartBlock with a constant threshold line
const ChartBlock = ({ title, data, threshold }) => (
  <div className="chart-block">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Data line */}
        <Line type="monotone" dataKey="value1" stroke="#8884d8" />
        {/* Constant threshold line */}
        <Line type="monotone" dataKey={() => threshold} stroke="red" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const BarChartBlock = ({ title, data }) => (
  <div className="chart-block">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value1" stackId="a" fill="#8884d8" />
        <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default Dashboard;

