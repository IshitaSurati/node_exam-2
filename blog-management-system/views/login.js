document.getElementById('userData').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        let response = await fetch('http://localhost:8090/users?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
        if (response.ok) {
            let users = await response.json();
            if (users.length > 0) {
                alert('Login successful!');
                window.location.href = 'index.html'; 
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('Login failed: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please try again later.');
    }
});
