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
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataLine = [
  { name: 'Sep', value1: 400, value2: 240 },
  { name: 'Oct', value1: 300, value2: 139 },
  { name: 'Nov', value1: 200, value2: 980 },
  { name: 'Dec', value1: 278, value2: 390 },
  { name: 'Jan', value1: 189, value2: 480 },
  { name: 'Feb', value1: 239, value2: 380 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Welding Robot');

  const renderContent = () => {
    switch (activeTab) {
      case 'Welding Robot':
        return (
          <div className="chart-grid">
            <ChartBlock title="Voltage" data={dataLine} />
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Vibration" data={dataLine} />
            <ChartBlock title="Power Consumption" data={dataLine} />
            <ChartBlock title="Current" data={dataLine} />
            <BarChartBlock title="Pressure" data={dataLine} />
            <BarChartBlock title="Gas Flow Rate" data={dataLine} />
          </div>
        );
      case 'Stamping Presses':
        return (
          <div className="chart-grid">
            <BarChartBlock title="Pressure" data={dataLine} />
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Force Applied (tons)" data={dataLine} />
            <ChartBlock title="Cycle Time (seconds)" data={dataLine} />
            <ChartBlock title="Press Temperature" data={dataLine} />
            <ChartBlock title="Vibration Level" data={dataLine} />
            <ChartBlock title="Cycle Count" data={dataLine} />
            <ChartBlock title="Oil Pressure" data={dataLine} />
            <ChartBlock title="Die Alignment" data={dataLine} />
            <ChartBlock title="Sheet Thickness" data={dataLine} />
            <ChartBlock title="Power Consumption (kWh)" data={dataLine} />
            <ChartBlock title="Noise Level (dB)" data={dataLine} />
            <ChartBlock title="Lubrication Flow Rate" data={dataLine} />
          </div>
        );
      case 'Painting Robots':
        return (
          <div className="chart-grid">
            <BarChartBlock title="Spray Pressure (bar)" data={dataLine} />
            <ChartBlock title="Paint Thickness (µm)" data={dataLine} />
            <ChartBlock title="Robot Arm Position (x, y, z)" data={dataLine} />
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Humidity (%RH)" data={dataLine} />
            <BarChartBlock title="Paint Flow Rate (ml/min)" data={dataLine} />
            <ChartBlock title="Paint Volume Used (liters)" data={dataLine} />
            <ChartBlock title="Atomizer Speed (RPM)" data={dataLine} />
            <ChartBlock title="Overspray Capture Efficiency (%)" data={dataLine} />
            <ChartBlock title="Booth Airflow Velocity (m/s)" data={dataLine} />
            <ChartBlock title="Solvent Concentration (%)" data={dataLine} />
          </div>
        );
      case 'AGVs':
        return (
          <div className="chart-grid">
            <ChartBlock title="Location (x, y, z)" data={dataLine} />
            <ChartBlock title="Battery Level (%)" data={dataLine} />
            <ChartBlock title="Load Weight (kg)" data={dataLine} />
            <ChartBlock title="Speed (m/s)" data={dataLine} />
            <ChartBlock title="Distance Traveled (meters)" data={dataLine} />
            <ChartBlock title="Obstacle Detection (yes/no)" data={dataLine} />
            <ChartBlock title="Navigation Status" data={dataLine} />
            <ChartBlock title="Vibration Level (mm/s)" data={dataLine} />
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Wheel Rotation Speed (RPM)" data={dataLine} />
          </div>
        );
      case 'CNC':
        return (
          <div className="chart-grid">
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Voltage" data={dataLine} />
            <ChartBlock title="Energy" data={dataLine} />
          </div>
        );
      case 'Leak Test Machine':
        return (
          <div className="chart-grid">
            <BarChartBlock title="Test Pressure (bar)" data={dataLine} />
            <ChartBlock title="Pressure Drop (bar)" data={dataLine} />
            <ChartBlock title="Leak Rate (ml/min)" data={dataLine} />
            <ChartBlock title="Test Duration (seconds)" data={dataLine} />
            <ChartBlock title="Temperature" data={dataLine} />
            <ChartBlock title="Pass/Fail Status" data={dataLine} />
            <ChartBlock title="Fluid Type" data={dataLine} />
            <ChartBlock title="Seal Condition" data={dataLine} />
            <ChartBlock title="Test Cycle Count" data={dataLine} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Navbar for Tabs */}
      <div className="tab-menu">
        <button
          className={activeTab === 'Welding Robot' ? 'active' : ''}
          onClick={() => setActiveTab('Welding Robot')}
        >
          Welding Robot
        </button>
        <button
          className={activeTab === 'Stamping Presses' ? 'active' : ''}
          onClick={() => setActiveTab('Stamping Presses')}
        >
          Stamping Presses
        </button>
        <button
          className={activeTab === 'Painting Robots' ? 'active' : ''}
          onClick={() => setActiveTab('Painting Robots')}
        >
          Painting Robots
        </button>
        <button
          className={activeTab === 'AGVs' ? 'active' : ''}
          onClick={() => setActiveTab('AGVs')}
        >
          AGVs
        </button>
        <button
          className={activeTab === 'CNC' ? 'active' : ''}
          onClick={() => setActiveTab('CNC')}
        >
          CNC
        </button>
        <button
          className={activeTab === 'Leak Test Machine' ? 'active' : ''}
          onClick={() => setActiveTab('Leak Test Machine')}
        >
          Leak Test Machine
        </button>
      </div>

      {/* Render Charts based on the active tab */}
      {renderContent()}
    </div>
  );
};

// Line chart block component
const ChartBlock = ({ title, data }) => (
  <div className="chart-block">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// Bar chart block component
const BarChartBlock = ({ title, data }) => (
  <div className="chart-block">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value1" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default Dashboard;

// CSS
const styles = `
.dashboard {
  padding: 20px;
}

.tab-menu {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: #f0f4f8;
  padding: 10px;
  border-radius: 8px;
}

.tab-menu button {
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.tab-menu button:hover {
  background-color: #e0e0e0;
}

.tab-menu button.active {
  background-color: #ffffff;
  border: 1px solid #007bff;
  font-weight: bold;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.chart-block {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-block h3 {
  margin-bottom: 10px;
}
`;

// Inject the CSS into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

