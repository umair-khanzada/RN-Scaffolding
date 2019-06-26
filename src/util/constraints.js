export default {
	firstName: {
		presence: true,
		length: {
			minimum: 3,
			message: 'must be at least 3 characters'
		}
	},
	lastName: {
		presence: true,
		length: {
			minimum: 3,
			message: 'must be at least 3 characters'
		}
	},
	email: {
		presence: true,
		email: {
			message: "^Doesn't look like a valid email"
		}
	},
	password: {
		presence: true,
		length: {
			minimum: 8,
			message: 'must be at least 8 characters'
		}
	},
	confirmPassword: {
		presence: true,
		length: {
			minimum: 8,
			message: 'must be at least 8 characters'
		},
		equality: 'password'
	}
};
