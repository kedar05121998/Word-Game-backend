const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        score: { type: Number, default: 0 },
        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            default: "Easy",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("users", UserSchema)

module.exports = UserModel