var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
function validateName() {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}
function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'enter valid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone Number might be 10 Digit';
        return false;
    }
    phoneError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail()) {
        submitError.style.display = 'block';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}

$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx_reIq8r82fGDpEYfZnzmA2m2gExXGhLlVg1Howg-gJTgQXqe59RnnBKoRaJjceGX7zw/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (responses) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})