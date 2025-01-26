document.getElementById('toggle-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:dhoterestaurant@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}