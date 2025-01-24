import React from 'react';

const AdminPanel = () => {
    const handleUserManagement = () => {
        alert('Redirecting to User Management...');
    };

    const handleContentApproval = () => {
        alert('Redirecting to Content Approval...');
    };

    const handleReportReview = () => {
        alert('Redirecting to Report Review...');
    };

    return (
        <div>
            <header>
                <h1>Admin Panel</h1>
            </header>
            <main>
                <section>
                    <h2>Manage Platform</h2>
                    <div>
                        <button onClick={handleUserManagement}>User Management</button>
                        <button onClick={handleContentApproval}>Content Approval</button>
                        <button onClick={handleReportReview}>Review Reports</button>
                    </div>
                </section>
                <section>
                    <h2>Statistics</h2>
                    <p>Total Users: 1000</p>
                    <p>Pending Content: 50</p>
                    <p>Reports to Review: 20</p>
                </section>
            </main>
        </div>
    );
};

export default AdminPanel;
