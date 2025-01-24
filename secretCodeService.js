const secretCodeService = {
    generateSecretCode: (length = 6) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    },

    validateSecretCode: (inputCode, actualCode) => {
        if (!inputCode || !actualCode) {
            return false;
        }
        return inputCode === actualCode;
    },

    maskSecretCode: (code) => {
        if (!code) {
            return '';
        }
        const visibleLength = 2;
        return code.substring(0, visibleLength) + '*'.repeat(code.length - visibleLength);
    },
};

export default secretCodeService;
