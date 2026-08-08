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
// Demonstrates unsafe command injection vulnerability

const child_process = require("child_process");

function executeCommand() {

    // Simulating external user input
    const userInput = process.argv[2] || "ls";

    child_process.exec(userInput, (error, stdout, stderr) => {

        if (error) {
            console.error(error);
            return;
        }

        console.log(stdout);
    });
}

// Example:
// node login.js "ls"
executeCommand();