$(document).ready (function(){

  console.log("Jquery Loaded");

  $("#passing_data").submit(passing_data);

});


function passing_data() {
  event.preventDefault();

  var from = $(".from").val();
  var to = $(".to").val();
  var depature_date = $(".depature_date").val();

  console.log(depature_date);
  console.log("from", from);
  console.log("to", to);

  if (from == to) {
    
    toastr.error("Please change From or To value");
    
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);
    return false;
  }
  localStorage.setItem("depature_date", JSON.stringify(depature_date));

  let url =
    "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
  const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
  const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
  const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

  axios.get(url, { headers: { Authorization: basicAuth } }).then((res) => {
    let data = res.data.rows;
    const users = data.map((obj) => obj.doc);
    console.log(users);

    var results = users.filter(
      (obj) => obj.source == from && obj.destination == to
    );

    console.log(results);
    localStorage.setItem("flight_details", JSON.stringify(results));

    window.location.href = "booking.html";
  });
}

function setDate() {
  let today = new Date().toJSON().substr(0, 10);
  $("#depature").attr("min", today);
}
setDate();
