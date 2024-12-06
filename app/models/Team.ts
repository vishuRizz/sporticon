import mongoose, { Schema, model, models } from 'mongoose';

const TeamSchema = new Schema({
  name: { type: String, required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }], 
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true }, 
  sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true }, 
});

export default models.Team || model('Team', TeamSchema);
