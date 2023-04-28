import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // tc: { type: Boolean, required: true },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// userSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject._v;
//     delete returnedObject.password;
//   },
// });

// userSchema.plugin(uniqueValidator, { message: "Email already in use." });

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
