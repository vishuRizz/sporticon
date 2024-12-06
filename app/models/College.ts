import mongoose, { Schema, model, models } from 'mongoose';

const CollegeSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

export default models.College || model('College', CollegeSchema);
