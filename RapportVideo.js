import React, { useState } from 'react';

const ReportVideo = () => {
    const [formData, setFormData] = useState({
        videoId: '',
        reason: '',
        details: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Report Data:', formData);
        setFormSubmitted(true);
        setFormData({ videoId: '', reason: '', details: '' });
    };

    return (
        <div style={styles.container}>
            <h1>Report Video</h1>
            {formSubmitted && (
                <p style={styles.successMessage}>
                    Thank you! Your report has been submitted.
                </p>
            )}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="videoId">Video ID</label>
                    <input
                        type="text"
                        id="videoId"
                        name="videoId"
                        value={formData.videoId}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="reason">Reason</label>
                    <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        style={styles.select}
                    >
                        <option value="" disabled>
                            Select a reason
                        </option>
                        <option value="Inappropriate Content">Inappropriate Content</option>
                        <option value="Copyright Violation">Copyright Violation</option>
                        <option value="Spam">Spam</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="details">Details</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Submit Report
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    select: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        minHeight: '100px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    successMessage: {
        color: '#28a745',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
};

export default ReportVideo;
