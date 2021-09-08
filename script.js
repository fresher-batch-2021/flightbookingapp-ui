$(document).ready (function(){

    console.log("Jquery Loaded");

    $("#passing_data").submit(passing_data);

});
function passing_data() {    
    event.preventDefault();
    toastr.error(ErrorMessage.login_account);
    console.log("toastr completed");
    setTimeout(function () { 
        window.location.href = "login.html"            
    }, 3000); 
    
    


}
function setDate(){
   
    let today = new Date().toJSON().substr(0,10);
    $("#depature").attr("min", today);

}
setDate();