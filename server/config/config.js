// const config = {
//     PORT: 5000,
//     // DB_URI: 'mongodb://localhost/PIM-MERN',
//     DB_URI: 'mongodb+srv://bubole4o:bubolecho@cluster0.qtxlz.mongodb.net/PIM-MERN?authSource=admin&replicaSet=atlas-83x6im-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
// }

const config = {
    PORT: 5001,
    // Using local MongoDB (recommended for development):
    DB_URI: 'mongodb://localhost:27017/PIM-MERN'
    // For MongoDB Atlas (cloud) - uncomment if you want to use Atlas:
    // DB_URI: 'mongodb+srv://bubole4o:bubolecho@cluster0.qtxlz.mongodb.net/PIM-MERN?retryWrites=true&w=majority'
}

module.exports = config;
