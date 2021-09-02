function passing_data() {    
    toastr.error("Please Login your account");
    console.log("toastr completed");
    setTimeout(function () { 
        window.location.href = "login.html"               
    }, 3000);
    alert("Please Login your account");
    window.location.href = "login.html" 
    


}
function setDate(){
    
    let today = new Date().toJSON().substr(0,10);
    document.querySelector("#depature").setAttribute("min", today);

}
setDate();