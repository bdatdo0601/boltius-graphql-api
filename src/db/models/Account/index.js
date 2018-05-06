import mongoose from "mongoose";

import authAttemptSchema from "./authAttempt";
import roleSchema from "./role";
import sessionSchema from "./session";
import userSchema from "./user";

export const AccountCollectionsName = Object.freeze({
    User: "User",
    AuthAttempt: "AuthAttempt",
    Role: "Role",
    Session: "Session",
});

const { User, AuthAttempt, Role, Session } = AccountCollectionsName;

export default Object.freeze({
    AuthAttempt: mongoose.model(AuthAttempt, authAttemptSchema),
    User: mongoose.model(User, userSchema),
    Role: mongoose.model(Role, roleSchema),
    Session: mongoose.model(Session, sessionSchema),
});
