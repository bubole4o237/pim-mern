const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

db.once('open', function () {
    console.log('✅ Database connected successfully!');
});

db.on('disconnected', () => {
    console.log('❌ Database disconnected');
});

module.exports = db;