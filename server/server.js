const express = require('express');
const routes = require('./routes');

const config = require('./config/config');
const cors = require('cors');


const app = express();

require('./config/mongoose');

app.use(cors());            
app.use(express.json());    

app.use('/api', routes);  


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));


