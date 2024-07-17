// pages/api/register.js
import mongoose from 'mongoose';
import User from '../../models/User';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { companyName, contactPerson, contactEmail, contactPhone, rcNumber, bnNumber, cacNumber, industry, addressLine1, addressLine2, city, state, country } = req.body;

    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const newUser = new User({
        companyName,
        contactPerson,
        contactEmail,
        contactPhone,
        rcNumber,
        bnNumber,
        cacNumber,
        industry,
        address: {
          line1: addressLine1,
          line2: addressLine2,
          city,
          state,
          country,
        },
      });

      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed. Please try again.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
