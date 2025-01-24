const fs = require('fs');
const path = require('path');

/**
 * Correct common syntax issues in a script file.
 * @param {string} filePath - Path to the script file to correct.
 * @returns {Promise<string>} The corrected script content.
 */
const correctScript = async (filePath) => {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    const scriptContent = await fs.promises.readFile(filePath, 'utf-8');
    const correctedContent = scriptContent
        .replace(/var\s+/g, 'let ') // Replace 'var' with 'let' for better scoping.
        .replace(/console\.log\(/g, 'console.debug(') // Replace `console.log` with `console.debug` for cleaner debugging.
        .replace(/==/g, '===') // Use strict equality for comparison.
        .replace(/!=/g, '!=='); // Use strict inequality for comparison.

    return correctedContent;
};

/**
 * Save the corrected script content back to the file or as a new file.
 * @param {string} filePath - Original file path.
 * @param {string} correctedContent - Corrected script content.
 * @param {boolean} saveAsNew - If true, save as a new file with "_corrected" suffix.
 * @returns {Promise<void>}
 */
const saveCorrectedScript = async (filePath, correctedContent, saveAsNew = true) => {
    const newFilePath = saveAsNew
        ? path.join(path.dirname(filePath), `${path.basename(filePath, path.extname(filePath))}_corrected${path.extname(filePath)}`)
        : filePath;

    await fs.promises.writeFile(newFilePath, correctedContent, 'utf-8');
    console.log(`Corrected script saved at: ${newFilePath}`);
};

module.exports = { correctScript, saveCorrectedScript };
