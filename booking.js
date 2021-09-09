

function bookNow(name,source,startTime,destination,endTime,duration,available_ticket, price,ticket_fare){
    console.log(name,source,startTime,destination,endTime,price);
    let depatute_date = JSON.parse(localStorage.getItem('depature_date'));
    console.log(depatute_date);
    
    let logged_in_users = JSON.parse(localStorage.getItem('logged_in_users'));
        console.log(logged_in_users);

    if(logged_in_users == null){
        toastr.error(ErrorMessage.login_account);
        console.log("toastr completed");
        setTimeout(function () {
        console.log("toastr completed");
        window.location.href = "login.html";

    }, 3000);
        return false;
    }

    if(available_ticket > 0){  

    
    let booked_flight = {
        "flight_name":name,
        "depature_from":source,
        "start_time":startTime,
        "destination":destination,
        "end_time":endTime,
        "duration":duration,
        "available_ticket":available_ticket,
        "price":price,
        "date":depatute_date,
        "ticket_fare":ticket_fare
    }
    console.log(booked_flight);
    
    localStorage.setItem('booked_flight_details',JSON.stringify(booked_flight)); 
    window.location.href = "passenger_details.html";

}else{
    toastr.error(ErrorMessage.unavailable);
    console.log("toastr completed");
    setTimeout(function () {
        console.log("toastr completed");
    }, 3000);
}
}
