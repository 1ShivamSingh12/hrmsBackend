import mongoose from 'mongoose';

const DATABASE_URL = "mongodb+srv://shivamsingh5:shivam123@hrmscluster.linlfuv.mongodb.net/hrms";


const connectDB = async () => {
  try {

    await mongoose.connect(DATABASE_URL)
    console.log('Connected Successfully...')

    
  } catch (error) {
    console.log(error)

  }
}

export default connectDB