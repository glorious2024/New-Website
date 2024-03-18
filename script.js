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
