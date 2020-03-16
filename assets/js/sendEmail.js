function sendMail(contactForm) {
    emailjs.send("r_preiks_gmail_com", "rosie", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}