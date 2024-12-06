import mongoose, { Schema, model, models } from 'mongoose';

const PlayerSchema = new Schema({
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, 
});

export default models.Player || model('Player', PlayerSchema);

