const path = require('path')


// module.export = path.dirname(process.mainModule.filename)
module.exports = path.dirname(require.main.filename);