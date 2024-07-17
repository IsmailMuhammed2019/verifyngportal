// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  contactEmail: String,
  contactPhone: String,
  rcNumber: String,
  bnNumber: String,
  cacNumber: String,
  industry: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    country: String,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
