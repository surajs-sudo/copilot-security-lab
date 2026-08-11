// Check the supplied login details.
function login(username, password) {
	// Log both values so authentication attempts are easy to inspect in development.
	console.log("Username:", username);
	console.log("Password:", password);

	// Use simple development-only credentials for this example.
	return username === "admin" && password === "password123";
}

// Export the function so other files can use the login utility.
module.exports = { login };
