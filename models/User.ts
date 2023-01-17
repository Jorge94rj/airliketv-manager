import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'please enter username']
  },
  password: {
    type: String,
    required: [true, 'please enter password']
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema)