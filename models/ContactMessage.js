import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:String,email:String,message:String,status:{type:String,default:'new'}},{timestamps:true});
export default mongoose.models.ContactMessage||mongoose.model('ContactMessage',schema);
