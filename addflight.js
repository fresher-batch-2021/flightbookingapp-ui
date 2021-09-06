function add_flight() {
  event.preventDefault();

  var flight_name = document.getElementById("name").value;
  var destination = document.getElementById("destination").value;
  var source = document.getElementById("source").value;
  var start = document.getElementById("startTime").value;
  var end = document.getElementById("endTime").value;
  var price = document.getElementById("price").value;

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
  if (flight_name == "" || flight_name == null || flight_name.trim == "") {
    alert("Invalid Flight Name");
    return false;
  }
  if (destination == "") {
    alert("invalid destination details");
    return false;
  }
  if (source == "") {
    alert("invalid source details");
    return false;
  }
  if (startTime == "") {
    alert("Invaild startTime");
    return false;
  }
  if (endTime == "") {
    alert("Invaild endTime");
    return false;
  }
  if (price == "") {
    alert("Invaild price valiue");
    return false;
  } else {
    console.log(flight_details);

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
        // alert("Flight added successfully");
        // window.location.href = "flightlist.html";
      });
  }
}
function back() {
  window.location.href = "flightlist.html";
}
