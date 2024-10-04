import mongoose from 'mongoose';

// Define the Member schema
const MemberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  joinAs: {
    type: String,
    required: true,
  },
  yourStory: {
    type: String,
    required: true,
  },
  nameOfBusiness: {
    type: String,
  },
  feedbackOnTheProblems: {
    type: String,
    required: true,
  },
  suggestionsOrQuestions: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
  { timestamps: true }
);

// Check if the Member model already exists, otherwise create a new one
const Member = mongoose.models?.Member || mongoose.model('Member', MemberSchema);

export default Member;
