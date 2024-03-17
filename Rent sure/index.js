function sendMail(){
    var parans = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    }
    const serviceID="service_fbfov0k";
const templateID="template_k6gbbga"

emailjs.send(serviceID,templateID,parans)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("yoyr message sent successfully");

    })  
    .catch((err) => console.log(err));
}

