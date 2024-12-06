import mongoose, { Schema, model, models } from 'mongoose';

const MatchSchema = new Schema({
  participants: [
    {
      participantId: { type: mongoose.Schema.Types.ObjectId, required: true },
      participantModel: { type: String, enum: ['Player', 'Team'], required: true }, 
    },
  ],
  scheduledAt: { type: Date, required: true },
  result: {
    winner: {
      winnerId: { type: mongoose.Schema.Types.ObjectId },
      winnerModel: { type: String, enum: ['Player', 'Team'] },
    },
    score: { type: String },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true }, 
});

const SportSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }, 
    matches: [MatchSchema],
  },
  { timestamps: true }
);

export default models.Sport || model('Sport', SportSchema);
