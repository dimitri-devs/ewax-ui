import mongoose from 'mongoose';
const schema=new mongoose.Schema({email:{type:String,unique:true},passwordHash:String},{timestamps:true});
export default mongoose.models.Admin||mongoose.model('Admin',schema);
