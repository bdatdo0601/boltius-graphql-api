import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema(
    {
        roleName: { type: String, required: true, unique: true },
        priority: { type: Number, required: true },
    },
    { timestamps: true }
);

export default roleSchema;
