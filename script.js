document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userData = {
        username: username,
        password: password
    };

    // Saving user data to accounts.json
    saveUserData(userData);

    // Display success message
    document.getElementById('message').innerText = 'Profile created successfully!';
});

function saveUserData(userData) {
    var fs = require('fs');

    // Check if the file exists
    fs.access('accounts.json', fs.F_OK, (err) => {
        if (err) {
            // If the file doesn't exist, create it and write data
            fs.writeFile('accounts.json', JSON.stringify([userData]), 'utf8', (err) => {
                if (err) throw err;
                console.log('Data has been written to accounts.json');
            });
        } else {
            // If the file exists, read data, append new user data, and write back
            fs.readFile('accounts.json', 'utf8', (err, data) => {
                if (err) throw err;
                var accounts = JSON.parse(data);
                accounts.push(userData);
                fs.writeFile('accounts.json', JSON.stringify(accounts), 'utf8', (err) => {
                    if (err) throw err;
                    console.log('Data has been written to accounts.json');
                });
            });
        }
    });
}
