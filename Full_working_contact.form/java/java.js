function sendEmail(){
        Email.send({
        Host : "smtp.gmail.com",
        Username : "anishkumarbdmi@gmail.com",
        Password : "Anish@1980",
        To : 'spbarnwal@gmail.com',
        From : document.getElementById("email").value,
        Subject :"New Contact Form Enquiry",
        Body: "And this is the body"
    }).then(
        message =>alert(message)
        );  
    };     