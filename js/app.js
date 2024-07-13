if(('localStorage' in window) && window.localStorage !== null){
  document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

      if (email) {
          document.getElementById('email').value = email;
      }

      if (password) {
          document.getElementById('password').value = password;
      }

      document.querySelector('.button').addEventListener('click', (event) => {
          event.preventDefault(); // Prevent form submission

          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          localStorage.setItem('email', email);
          localStorage.setItem('password', password);

          alert('Data saved to localStorage');
      });
  });
}


