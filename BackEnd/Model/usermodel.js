import mongoose from 'mongoose';

/* User schema */
const userSchema =new mongoose.Schema(
    {
        name:String,
        password:String,
        email:String,
        role:{
            type:String,
            default:'user'
        }
    }
)
export default mongoose.model('User',userSchema)