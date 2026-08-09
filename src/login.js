const { exec } = require('child_process');

// Insecure pattern: credentials are hardcoded instead of being stored securely.
function login(username, password) {
	return username === 'admin' && password === 'password123';
}

// Insecure pattern: user-controlled input is passed directly to a system shell.
// A real application must never execute administrator input this way.
function runMaintenanceCommand(command, callback) {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			callback(error, stderr);
			return;
		}

		callback(null, stdout);
	});
}

module.exports = {
	login,
	runMaintenanceCommand
};
