export const schemaPost = {
	type: 'object',
	required: ['id', 'username', 'email', 'token'],
	properties: {
		id: { type: 'number' },
		username: { type: 'string' },
		email: { type: 'string', format: 'email'},
		firstName: { type: 'string' },
		lastName: { type: 'string' },
		gender: { enum: ['male', 'female', 'unknown']},
		image: { type: 'string', format:"url"},
		token: { type : 'string'},
	}
}

export const schemaGet = {
	type: 'object',
	required: ['id', 'firstName', 'lastName'],
	properties: {
		id: { type: 'number' },
		firstName: { type: 'string' },
		lastName: { type: 'string' },
	}
}


export const schemaPut = {
	type: 'object',
	required: ['id', 'firstName', 'lastName'],
	minProperties: 3,
	additionalProperties: true,
	properties: {
		id: { type: 'number' },
		firstName: { type: 'string' },
		lastName: { type: 'string' },
	}
}


export const schemaDelete = {
	type: 'object',
	required: ['id', 'firstName', 'lastName'],
	properties: {
		id: { type: 'number' },
		firstName: { type: 'string' },
		lastName: { type: 'string' },
	}
}