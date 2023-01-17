import mongoose from 'mongoose';

const AssetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter name'],
    unique: [true, 'name must be unique']
  },
  assetType: {
    type: String,
    required: [true, 'please enter type']
  },
  path: {
    type: String,
    required: [true, 'path is required']
  },
});

export default mongoose.models.Asset || mongoose.model('Asset', AssetSchema)