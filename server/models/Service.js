import mongoose, { Schema } from "mongoose";
const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: {
      type: String,
      required: true,
    },
    serviceDescription: {
      type: String,
      required: true,
    },
    RatePerHour: {
      type: Number,
      required: true,
    },
    availability: [{
      day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      }
    }],
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  { timestamps: true }
);
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;