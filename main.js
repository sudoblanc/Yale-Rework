// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Validate form input
  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
    alert('Please fill in all fields');
    return;
  }

  // Construct email message
  const message = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nSubject: ${subjectInput.value}\nMessage: ${messageInput.value}`;

  // Send email (example code, not functional)
  sendEmail('example@example.com', 'Contact form submission', message);

  // Clear form input
  form.reset();

  alert('Thank you for your message!');
});

// Example function for sending email
function sendEmail(to, subject, message) {
  // Example code for sending email
  console.log(`Sending email to ${to} with subject "${subject}" and message:\n${message}`);
}
