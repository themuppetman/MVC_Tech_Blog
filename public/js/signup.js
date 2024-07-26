const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    console.log('Signup attempt:', { username, password });
  
    if (username && password) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        console.log('Response status:', response.status);
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          alert('Failed to sign up.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to sign up.');
      }
    } else {
      alert('Please enter a username and password.');
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);