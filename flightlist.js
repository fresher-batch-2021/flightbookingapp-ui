function flight_data() {
  event.preventDefault();

  var from = document.querySelector(".from").value;
  var to = document.querySelector(".to").value;
  var flight_name = document.querySelector(".flight_name").value;

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
      (obj) =>
        obj.source == from && obj.destination == to && obj.name == flight_name && obj.status == "ACTIVE"
    );

    console.log(results);

    let content = "";
    for (let task of results) {
      content =
        content +
        `<tr><td>${task.name}</td><td>${
          task.source + "-" + task.startTime
        }</td><td>${task.destination + "-" + task.endTime}</td><td>${
          task.price
        }</td><td><button type='button'  onclick = "cancel_flight('${
          task._id
        }','${task._rev}')">Cancel </button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#task_table").innerHTML = content;
  });
}
function all_flights() {
  let url =
    "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
  const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
  const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
  const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

  axios.get(url, { headers: { Authorization: basicAuth } }).then((res) => {
    let data = res.data.rows;
    const users = data.map((obj) => obj.doc);
    console.log(users);
    let content = "";
    for (let task of users) {
      content =
        content +
        `<tr><td>${task.name}</td><td>${
          task.source + "-" + task.startTime
        }</td><td>${task.destination + "-" + task.endTime}</td><td>${
          task.price
        }</td><td><button type='button'  onclick = "cancel_flight('${
          task._id
        }','${task._rev}')"> Cancel </button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#task_table").innerHTML = content;
  });
}

function cancel_flight(id, rev) {
  // let cfm = confirm("Do you want to delete this data?");
  // if(cfm){
  Swal.fire({
    title: "Are you sure",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Cancel it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your Flight has been canceled.", "success").then(
        (result1) => {
          window.location.reload();
        }
      );
      console.log(id);
      console.log(rev);
      let url =
        "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/"+id;
      const dbusername =
        "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
      const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
      const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

      axios.get(url, { headers: {'Authorization': basicAuth}}).then(res1=>{

        let product  = res1.data;
        console.log(product);
        product.status ="INACTIVE";
    
        axios.put(url, product,  { headers: {'Authorization': basicAuth}}).then(res3 => {
    
            
            flight_list();
        }).catch(err =>{
            
            toastr.error("error in deleting");
    
        })
    })
      // }
    }
  });
}

function flight() {
  let url =
    "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
  const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
  const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
  const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

  axios.get(url, { headers: { Authorization: basicAuth } }).then((res) => {
    let data = res.data.rows;
    const users = data.map((obj) => obj.doc);
    console.log(users);
    let content = [];
    let flight_list ="";

    for (let flight_name of users) {
      let value = flight_name.name.split(",");
      content.push(...value);
      console.log(content);
    }
    var uniqueNames = [];
    $.each(content, function (i, el) {
      if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    console.log(uniqueNames);

    for(let value of uniqueNames){
      flight_list += `<option value="${value}">${value}</option>`;
    }
    $("#flight_name").html(flight_list);
  });
}
flight();
function addflight() {
  window.location.href = "add_flight.html";
}
function passenger_list() {
  window.location.href = "passenger_list.html";
}

function logout() {
  localStorage.clear();
  alert("succesfUlly logout");
  window.location.href = "index.html";
}
