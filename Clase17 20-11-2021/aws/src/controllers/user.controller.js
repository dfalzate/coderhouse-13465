import AWS from 'aws-sdk'
import * as UserService from '../services/user.service.js'

AWS.config.update({
	region: 'us-east-2',
})

const sns = new AWS.SNS()

export async function createUser(req, res) {
	try {
		const { body } = req
		const response = await UserService.createUser(body)
		if (response) {
			sns
				.publish({
					Message: 'User created',
					Subject: 'New User created',
					TopicArn: process.env.ARN,
				})
				.promise()
				.catch((err) => {
					res.status(400).json(err)
				})
			res.status(200).json(response)
		}
	} catch (error) {
		res.status(400).json(error.message)
	}
}
