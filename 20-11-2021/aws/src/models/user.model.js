import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

export const UserModel = mongoose.model('User', Schema)
