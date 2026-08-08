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