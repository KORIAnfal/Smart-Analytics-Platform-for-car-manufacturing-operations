<!DOCTYPE html>
<html>
<head>
    
</head>
<body>

<h1>Smart Factory Monitoring Platform</h1>

<h2>1. Project Overview</h2>
<p>This project is a <strong>Smart Factory Monitoring Platform</strong> designed to enhance the efficiency and coordination of a car manufacturing process. Using real-time data, it tracks machine performance, production status, energy usage, and maintenance schedules. The platform integrates <strong>React.js</strong> for the frontend, <strong>Django</strong> for the backend, and webhook-based data retrieval, providing a user-friendly interface for factory managers and operators.</p>

<h2>2. Key Features</h2>
<ul>
    <li><strong>Real-Time Machine Monitoring</strong>: Track key performance metrics like temperature, vibration, and energy usage of critical machines (stamping presses, welding robots, AGVs).</li>
    <li><strong>Production Progress</strong>: Monitor production targets for each shift, ensuring timely assembly and identifying bottlenecks in real time.</li>
    <li><strong>Defect Logging and Analysis</strong>: Record and analyze defects, helping to identify patterns and improve product quality.</li>
    <li><strong>Alert System</strong>: Send timely notifications when machine issues (e.g., overheating, slow performance) or delays are detected.</li>
    <li><strong>Energy Monitoring</strong>: Track energy consumption across machines and shifts to optimize efficiency and reduce costs.</li>
    <li><strong>Task Scheduling</strong>: Automatically generate and assign maintenance tasks based on machine usage, ensuring optimal equipment performance.</li>
    <li><strong>Interactive Dashboard</strong>: Visualize machine status and production data through charts and graphs for better decision-making.</li>
    <li><strong>Authentication & Role-Based Access Control</strong>: Secure authentication with role-based access, providing specific functionality and access rights to managers and operators. Managers have full access to all features, including alerts, energy monitoring, and production tracking, while operators have access to machine performance and maintenance tasks.</li>
    <li><strong>Responsiveness</strong>: The platform is optimized for use on desktops, tablets, and mobile devices.</li>
    <li><strong>Scalability</strong>: Designed to accommodate the growth of users, machines, and data without compromising performance.</li>
</ul>

<h2>3. Getting Started</h2>

<h3>Prerequisites</h3>
<p>To run the project, ensure you have the following installed:</p>
<h4>Backend (Django)</h4>
<ul>
    <li>Python 3.9 or later</li>
    <li>Django 4.0 or later</li>
    <li>PostgreSQL (or any other supported database)</li>
</ul>
<h4>Frontend (React.js)</h4>
<ul>
    <li>Node.js v14 or later</li>
    <li>NPM v6 or later</li>
</ul>

<h3>Database Setup</h3>
<p>Follow the link below for the Database Design:</p>
<p><a href="https://docs.google.com/document/d/11mlDX1Kb9K99MTDe4hddmK1adtLYNJEjL7dcOwXxF2g/edit?usp=sharing">Database Design</a></p>

<h3>4. Running the Project</h3>
<ol>
    <li>Clone the Repository
        <pre><code>git clone https://github.com/Adas_Manufacturing_system.git
cd Adas_Manufacturing_system</code></pre>
    </li>
    <li>Backend (Django) Setup
        <ol>
            <li>Navigate to the backend directory:
                <pre><code>cd backend</code></pre>
            </li>
            <li>Create a virtual environment and activate it:
                <pre><code>python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>pip install -r requirements.txt</code></pre>
            </li>
            <li>Expose the server to the internet using Localtunnel:
                <pre><code>lt --port 8000 --subdomain machinesystemwebhook</code></pre>
                <p>This command does the following:</p>
                <ul>
                    <li>Exposes your local server running on port 8000 to the internet.</li>
                    <li>Uses the subdomain machinesystemwebhook, making your local server accessible at: <a href="https://machinesystemwebhook.loca.lt">https://machinesystemwebhook.loca.lt</a>.</li>
                    <li>This is particularly useful for testing webhooks or external services that require a publicly accessible URL while running the server locally.</li>
                </ul>
            </li>
            <li>Set up the database:
                <pre><code>python manage.py migrate</code></pre>
            </li>
            <li>Start the Django server:
                <pre><code>python manage.py runserver</code></pre>
            </li>
        </ol>
    </li>
    <li>Frontend (React.js) Setup
        <ol>
            <li>Navigate to the frontend directory:
                <pre><code>cd frontend</code></pre>
            </li>
            <li>Install the required dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Start the frontend server:
                <pre><code>npm start</code></pre>
            </li>
        </ol>
    </li>
</ol>

<h3>5. Data Fetching Mechanism</h3>
<p>The platform retrieves data from machines every 20 seconds via a webhook. The data is stored in a CSV file and is regularly updated to reflect the latest machine performance metrics. These metrics are displayed in various charts and dashboards.</p>

<h3>6. Features Walkthrough</h3>
<ul>
    <li><strong>Dashboard</strong>: Shows an overview of machine performance with real-time data visualizations and metrics for each machine.</li>
    <li><strong>Alerts Page</strong>: Displays notifications about machine malfunctions or production delays, allowing operators and managers to respond quickly.</li>
</ul>

<h3>7. Figma Design</h3>
<p>Check out the Figma design for the platform interface here: <a href="https://www.figma.com/design/B07q9SwJd2nbiRJIWo8XmX/SAPCO?node-id=1-2&t=p2r8utjQJC78EuDC-1">Figma Design</a></p>

<h3>8. Important Endpoints</h3>
<ul>
    <li><strong>Machines/view.py</strong>: Fetch data about all machines.</li>
</ul>

<h3>9. Role-Based Authentication</h3>
<ul>
    <li><strong>Managers</strong>: Full access to all platform features including machine monitoring, production tracking, defect analysis, energy monitoring, and the task scheduling system.</li>
    <li><strong>Operators</strong>: Access to machine performance, maintenance task scheduling, and limited visibility into other sections as defined by their role.</li>
</ul>
<p>Both roles are securely authenticated with session or token-based management.</p>

<h3>10. Conclusion</h3>
<p>By combining powerful data analytics, machine tracking, and real-time monitoring, this platform acts as the control center for the factory. It provides the tools needed to maintain smooth operations, reduce downtime, and enhance overall productivity.</p>

</body>
</html>
