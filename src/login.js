const crypto = require("crypto");
const { promisify } = require("util");

const scrypt = promisify(crypto.scrypt);
const SALT_LENGTH = 16;
const KEY_LENGTH = 64;

// Create a salted password hash to store with a user account.
async function hashPassword(password) {
	if (typeof password !== "string" || password.length < 12) {
		throw new TypeError("Password must be at least 12 characters long.");
	}

	const salt = crypto.randomBytes(SALT_LENGTH);
	const derivedKey = await scrypt(password, salt, KEY_LENGTH);
	return `${salt.toString("base64")}:${derivedKey.toString("base64")}`;
}

// Check credentials against a stored hash without exposing sensitive values.
async function login(username, password, storedPasswordHash) {
	const validUsername = typeof username === "string" && username.trim().length > 0;
	const validPassword = typeof password === "string" && password.length > 0;
	const hashParts = typeof storedPasswordHash === "string"
		? storedPasswordHash.split(":")
		: [];

	let authenticated = false;
	if (validUsername && validPassword && hashParts.length === 2) {
		try {
			const salt = Buffer.from(hashParts[0], "base64");
			const expectedHash = Buffer.from(hashParts[1], "base64");
			const actualHash = await scrypt(password, salt, expectedHash.length);

			authenticated = expectedHash.length === actualHash.length &&
				crypto.timingSafeEqual(expectedHash, actualHash);
		} catch (error) {
			// Treat malformed stored data as a failed login, without exposing details.
			authenticated = false;
		}
	}

	console.info("Login attempt", { success: authenticated });
	return authenticated;
}

module.exports = { hashPassword, login };
