// Cloud configuration settings for integration services

const cloudConfig = {
    storage: {
        provider: 'AWS', // Example cloud storage provider (AWS, Azure, GCP)
        bucketName: 'project-cloud-storage',
        region: 'us-west-2',
        accessKey: process.env.AWS_ACCESS_KEY_ID,
        secretKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    processing: {
        maxConcurrentTasks: 10, // Maximum number of tasks to process concurrently
        retryLimit: 5, // Number of retry attempts for failed tasks
        timeoutDuration: 60000, // Timeout duration in milliseconds
    },
    security: {
        enableEncryption: true, // Encrypt data before storage
        encryptionAlgorithm: 'AES-256', // Encryption algorithm used
    },
};

module.exports = cloudConfig;
