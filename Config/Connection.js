const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const connectionDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('Database has been connected')
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectionDB;