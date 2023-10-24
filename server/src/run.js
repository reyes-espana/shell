require('dotenv').config()
const {app} = require('./app')
const { db } = require("./db/config")
const PORT = 3000

async function init() {
    db.sync()
    app.listen(PORT, () => void console.log("Server listening at http://localhost:${PORT}" ))
}

init()
