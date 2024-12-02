import mongoose, {model, Schema} from 'mongoose';

mongoose.connect("mongodb://localhost:27017/secondBrain_DB")
 
const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema)

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true},
})

export const LinkModel = model("Link", LinkSchema);