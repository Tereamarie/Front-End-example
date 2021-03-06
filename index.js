require("dotenv").config();

const server = require('./server');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`\n===Server listening on localhost${PORT} ===\n`);
});