function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number: document.getElementById("number").value,
        company: document.getElementById("company").value,
        message:document.getElementById("message").value
    }

    const serviceID = "service_yj3j75j";
const templateID ="template_g6wx7je";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        document.getElementById("company").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch((err)=>console.log(err));
}
