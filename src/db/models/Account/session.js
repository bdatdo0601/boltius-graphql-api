import mongoose from "mongoose";

const { Schema } = mongoose;

const sessionSchema = new Schema({}, { timestamps: true });

export default sessionSchema;
