import mongoose from 'mongoose';
const schema=new mongoose.Schema({email:String,provider:String,ip:String,userAgent:String},{timestamps:true});
export default mongoose.models.LoginHistory||mongoose.model('LoginHistory',schema);
