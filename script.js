function passing_data() {    

    alert("Please Login your account");
    window.location.href = "login.html"


}
function setDate(){
    
    let today = new Date().toJSON().substr(0,10);
    document.querySelector("#depature").setAttribute("min", today);

}
setDate();