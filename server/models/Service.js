import mongoose, { Schema } from "mongoose";
const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: {
      type: String,
      required: [true, "Please enter service title"],
    },
    serviceDescription: {
      type: String,
      required: [true, "Please enter service description"],
    },
    RatePerHour: {
      type: Number,
      required: [true, "Please enter rate per hour"],
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

  // comments for dissatisfied services
  { timestamps: true }
);
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;