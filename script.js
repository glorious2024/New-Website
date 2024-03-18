document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userData = {
        username: username,
        password: password
    };

    // Saving user data to localStorage
    saveUserData(userData);

    // Display success message
    document.getElementById('message').innerText = 'Profile created successfully!';
});

function saveUserData(userData) {
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push(userData);
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
function getUserData(username) {
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    var userData = accounts.find(function(user) {
        return user.username === username;
    });
    return userData;
}

// Example usage:
var usernameToFind = 'desired_username';
var userData = getUserData(usernameToFind);

if (userData) {
    console.log('User data found:', userData);
} else {
    console.log('User data not found.');
}

