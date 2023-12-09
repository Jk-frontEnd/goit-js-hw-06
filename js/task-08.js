document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('All fields must be filled out');
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData);

        form.reset();
    }
});
