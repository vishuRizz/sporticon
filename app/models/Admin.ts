import mongoose, { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
  googleId: { type: String, unique: true, sparse: true }, 
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['SuperAdmin', 'EventCoordinator'], default: 'EventCoordinator' },
});

export default models.Admin || model('Admin', AdminSchema);
