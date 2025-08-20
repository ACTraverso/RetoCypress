
const { exec } = require('child_process');
const path = require('path');

const reportPath = path.join(__dirname, 'allure-report', 'index.html');
exec(`start "" "${reportPath}"`);