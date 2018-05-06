import mongoose from "mongoose";

const { Schema } = mongoose;

const authAttemptSchema = new Schema({}, { timestamps: true });

export default authAttemptSchema;
