//  JavaScript for form validation
 document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    
    // Check validity using Bootstrap's built-in validation
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert('Form submitted successfully!');
    }

    form.classList.add('was-validated');
  });


  
