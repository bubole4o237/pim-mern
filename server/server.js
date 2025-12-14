const express = require('express');
const routes = require('./routes');

const config = require('./config/config');
const cors = require('cors');


const app = express();

require('./config/mongoose');

app.use(cors());            
app.use(express.json());    

app.use('/api', routes);  

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({ error: message });
});

const server = app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ ERROR: Port ${config.PORT} is already in use!\n`);
        console.log('Please do one of the following:');
        console.log(`1. Stop the process using port ${config.PORT}: lsof -ti:${config.PORT} | xargs kill -9`);
        console.log('2. Change the port in server/config/config.js to a different port\n');
        process.exit(1);
    } else {
        throw err;
    }
});


