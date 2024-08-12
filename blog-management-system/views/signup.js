document.getElementById('userData').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        let response = await fetch('http://localhost:8090/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        if (response.ok) {
            let result = await response.json();
            console.log(result);
            alert('Signup successful!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Signup failed: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Signup failed. Please try again later.');
    }
});
