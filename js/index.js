
  function RegisterAccount(){
    var name = document.getElementById('nameSurname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('Subject').value;
    var contact = document.getElementById('contact').value;
    var password = document.getElementById('password').value;
    var checkbox = document.getElementById('newsletters').checked;

    if (checkbox.checked) {
alert(
    "Welcome " + nameSurname + "! Thank you for your interest in " + subject + "! We will contact you via the email you provided: " + email + "Or alternatively on the phone number " + contact
);
    } else {
        alert(
            "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + nameSurname + "! If you want to sign up you better check that newsletter box!"
        );
    }

console.log(RegisterAccount)


}

