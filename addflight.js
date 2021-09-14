
function add_flight() {
  event.preventDefault();

  var flight_name = $("#name").val();
  var destination = $("#destination").val();
  var source = $("#source").val();
  var start = $("#startTime").val();
  var end = $("#endTime").val();
  var tickets = $("#tickets").val();
  var price = $("#price").val();

  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    return (
      (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes
    );
  }

  let duration = diff(start, end);

  let flight_details = {
    Name: flight_name,
    destination: destination,
    source: source,
    startTime: startTime,
    endTime: endTime,
    duration: duration,
    price: price,
  };

  try{
      validator.isValidString(flight_name,ErrorMessage.flight_name);
      validator.isValidInput(source,ErrorMessage.from);
      validator.isValidInput(destination,ErrorMessage.to);
      validator.isValidInput(startTime,ErrorMessage.startTime);
      validator.isValidInput(endTime,ErrorMessage.endTime);
      validator.isValidInput(price,ErrorMessage.price);

      



    let url =
      "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);
    let formData = {
      name: flight_name,
      destination: destination,
      source: source,
      startTime: start,
      endTime: end,
      duration: duration,
      total_ticket: tickets,
      price: "₹" + price,
      ticket_fare: price,
      status: "ACTIVE",
    };
    axios
      .post(url, formData, { headers: { Authorization: basicAuth } })
      .then((res) => {
        let data = res.data;
        console.log(data);
        toastr.success("Flight added successful");
        console.log("toastr completed");
        setTimeout(function () {
           window.location.href = "all_flights.html";
        }, 2000);
        
      });
  }
  catch(err){
    console.error(err.message);
    toastr.error(err.message);
  }

  
 
  
}
function back() {
  window.location.href = "flightlist.html";
}
