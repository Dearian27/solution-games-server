import mongoose from 'mongoose';

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      requred: true
    },
    members: {
      type: [String],
      default: []
    }
  }
)

export const Group = mongoose.model('Group', groupSchema);