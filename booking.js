function logout(){
    localStorage.clear();
    alert("succesfilly logout")
    window.location.href = "index.html"
}

function bookNow(name,source,startTime,destination,endTime,price){
    console.log(name,source,startTime,destination,endTime,price);
    
    
    let booked_flight = {
        "flight_name":name,
        "depature_from":source,
        "start_time":startTime,
        "destination":destination,
        "end_time":endTime,
        "price":price,
    }
    console.log(booked_flight);
    localStorage.setItem('booked_flight_details',JSON.stringify(booked_flight)); 
    
}
