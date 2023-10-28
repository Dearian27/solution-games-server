import mongoose from 'mongoose';

const gameSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    parameters: [{
      name: String,
      value: String,
    }],
  }
)

export const Game = mongoose.model('Game', gameSchema);