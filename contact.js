document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add further validation or submission logic
    alert('Form submitted successfully!');
});


document.querySelectorAll('.icon-link').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.querySelector('.icon').classList.add('animated');
    });
    
    icon.addEventListener('mouseout', function() {
        this.querySelector('.icon').classList.remove('animated');
    });
});
