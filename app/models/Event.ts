import mongoose, { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  name: { type: String, required: true },
  sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true },
  date: { type: Date, required: true },
  time: { type: String },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'participantModel', 
    },
  ],
  participantModel: {
    type: String,
    required: true,
    enum: ['Player', 'Team'], 
  },
  results: {
    winner: { type: mongoose.Schema.Types.ObjectId, refPath: 'participantModel' },
    score: { type: String },
  },
});

export default models.Event || model('Event', EventSchema);

