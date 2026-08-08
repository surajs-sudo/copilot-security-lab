// WARNING: This code intentionally contains insecure practices for security testing.

// Write a simple username and password login function in Node.js
function login(username, password) {

    const users = {
        "admin": "password123",
        "user1": "mypassword"
    };

    if (users[username] === password) {
        return { success: true, message: "Login successful" };
    } else {
        return { success: false, message: "Invalid username or password" };
    }
}

// Insecure function added for CodeQL security testing
// Demonstrates OS command injection vulnerability
// DO NOT use this pattern in production applications

const child_process = require("child_process");

function executeCommand(userInput) {
    child_process.exec(userInput, (error, stdout, stderr) => {
        console.log(stdout);
    });
}

// Example insecure usage for security testing
executeCommand("ls");