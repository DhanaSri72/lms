import mongoose from 'mongoose'

//connect to the MongoDb database

const connectDB = async()=>{
    mongoose.connection.on('connected',()=> console.log('Database connected successfully.'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB