

function bookNow(name,source,startTime,destination,endTime,duration, price,ticket_fare){
    console.log(name,source,startTime,destination,endTime,price);
    let depatute_date = JSON.parse(localStorage.getItem('depature_date'));
    console.log(depatute_date);
    
    
    let booked_flight = {
        "flight_name":name,
        "depature_from":source,
        "start_time":startTime,
        "destination":destination,
        "end_time":endTime,
        "duration":duration,
        "price":price,
        "date":depatute_date,
        "ticket_fare":ticket_fare
    }
    console.log(booked_flight);
    localStorage.setItem('booked_flight_details',JSON.stringify(booked_flight)); 
    
}
