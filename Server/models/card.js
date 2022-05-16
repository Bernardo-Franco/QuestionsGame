import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  category:  {type:String, required:true},
  question: {type:String, required:true},
  choices: [{type:String, required:true},{type:String, required:true},{type:String, required:true},{type:String, required:true}],
  answer: {type:String, required:true}
});

export default mongoose.model("Card", cardSchema);