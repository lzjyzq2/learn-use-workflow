const fs = require('fs');

const newVersionName = 'learn-use-workflow-' + process.env.version + '.exe'
fs.rename('learn-use-workflow.exe', newVersionName)