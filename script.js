document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    if (!username || !password) {
      errorMessage.textContent = 'Please fill out both fields.';
      return;
    }
  
    // Redirect to home page after successful login
    window.location.href = 'index.html';
  });
  