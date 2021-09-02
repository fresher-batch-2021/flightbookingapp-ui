function passenger_validation() {
    event.preventDefault();
    var passenger_name = document.getElementById("name").value;
    var passenger_age = document.getElementById("age").value;
    var passenger_gender = document.getElementById("gender").value;


    if (passenger_name == "" || passenger_name == null || passenger_name.trim == "") {
        toastr.error("Invaild name");
        console.log("toastr completed");
        setTimeout(function () {
            
        }, 3000);
        
        return false;
    }
    if (passenger_age == "" || passenger_age == null || passenger_age.trim == "") {
        toastr.error("Invaild age");
        console.log("toastr completed");
        setTimeout(function () {
            
        }, 3000);
        
        return false;
    }
    if (passenger_gender == "select") {
        toastr.error("Invaild Gender");
        console.log("toastr completed");
        setTimeout(function () {
            
        }, 3000);
        
        return false;
    }
    else {
        passenger_details()
    }
}

function displayPassengerDetails() {

    let usersStr = localStorage.getItem("passengers");
    console.log(usersStr);
    // if users data available in localStorage, then do parse else assign an empty array
    let passengers = usersStr != null ? JSON.parse(usersStr) : [];
    var content = "";
    let i = 0;
    for (let passengerObj of passengers) {

        content += "<tr><td>" + (i + 1) + "</td><td>" + passengerObj.name + "</td><td>" + passengerObj.age + "</td><td>" + passengerObj.gender + "</td><td><button type='button' onclick = 'cancel_passenger(" + i + ")'>Remove</button></td></tr>";
        i++;
    }
    document.querySelector("#passenger_tablebody").innerHTML = content;
    document.querySelector("#passenger_count").innerHTML = i;
    let flight_details = JSON.parse(localStorage.getItem('booked_flight_details'));
    let price = flight_details.price;
    let total = i * price;
    document.querySelector("#total_fare").innerHTML = total;
    let ticket_fare = {
        "no_of_passenger": i,
        "ticket_fare": price,
        "total_fare": total,
    }
    console.log(ticket_fare);
    localStorage.setItem('ticket_fare', JSON.stringify(ticket_fare));

}
function cancel_passenger(index) {

    let usersStr = localStorage.getItem("passengers");
    console.log(usersStr);
    // if users data available in localStorage, then do parse else assign an empty array
    let passengers = usersStr != null ? JSON.parse(usersStr) : [];
    passengers.splice(index, 1);
    localStorage.setItem("passengers", JSON.stringify(passengers));
    displayPassengerDetails();



}
function passenger_details() {
    //set passengers details
    var passengerName = document.getElementById("name").value;
    var passengerAge = document.getElementById("age").value;
    var passengerGender = document.getElementById("gender").value;
    var passengerObj = { "name": passengerName, "age": passengerAge, "gender": passengerGender }


    let usersStr = localStorage.getItem("passengers");
    console.log(usersStr);


    let passengers = usersStr != null ? JSON.parse(usersStr) : [];
    console.log(passengers);
    passengers.push(passengerObj);
    console.log(passengers);


    if (passengers.length > 4) {
        toastr.error("Maximum only 4 passengers");
        console.log("toastr completed");
        setTimeout(function () {
            
        }, 3000);
        // alert("Maximum only 4 passengers")
        return false;
    } else {

        localStorage.setItem("passengers", JSON.stringify(passengers));
        displayPassengerDetails();


    }

}


function registration_successful() {

    let ticket_fare = JSON.parse(localStorage.getItem('ticket_fare'));
    console.log(ticket_fare);
    let no_of_passenger = ticket_fare.no_of_passenger;
    let ticket = ticket_fare.ticket_fare;
    let total = ticket_fare.total_fare;

    let flight_details = JSON.parse(localStorage.getItem('booked_flight_details'));
    console.log(flight_details);

    let flight_name = flight_details.flight_name;
    let from = flight_details.depature_from;
    let to = flight_details.destination;
    let depature_date = flight_details.date;

    let user_details = JSON.parse(localStorage.getItem('logged_in_users'));
    console.log(user_details);
    let user = user_details.username;
    console.log(user);


    let usersStr = localStorage.getItem("passengers");
    console.log(usersStr);


    let passengers = usersStr != null ? JSON.parse(usersStr) : [];
    console.log(passengers);

    console.log(passengers.length);
    if (passengers.length < 1) {
        alert("please entre passenger details");
        return false;
    } else {
        let url = "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/passenger_details/";
        const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
        const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
        const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);
        let formData = {
            flight_name: flight_name,
            from: from,
            to: to,
            username: user,
            no_of_passengers: no_of_passenger,
            ticket_fare: ticket,
            total_fare: total,
            date: depature_date,
            passengers,

        };
        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            console.log(data);
            toastr.success("Successfully Booked");
            console.log("toastr completed");
            setTimeout(function () {
                window.location.href = "ticket.html"
            }, 3000);



        })
    }




}

