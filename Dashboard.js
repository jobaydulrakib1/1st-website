import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
            </header>
            <main>
                <p>Welcome to your dashboard! Here, you can manage your account, view analytics, and access all your personalized settings.</p>
                <section>
                    <h2>Quick Actions</h2>
                    <ul>
                        <li><button onClick={() => alert('Navigating to account settings...')}>Account Settings</button></li>
                        <li><button onClick={() => alert('Viewing analytics...')}>View Analytics</button></li>
                        <li><button onClick={() => alert('Checking notifications...')}>Check Notifications</button></li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
