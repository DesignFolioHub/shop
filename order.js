function sendEmail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_sbj7wrq";
    const templateID = "template_qm5s88v"

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";
                console.log(res)
                alert("Your Order Booked Successfully")
            }
        )
        .catch((err) => console.log(err));
}



