import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        joinedDate: Date,
        status: String,
        role: roleSchema,
        roleExpiryDate: Date,
    },
    { timestamps: true }
);

export default userSchema;
