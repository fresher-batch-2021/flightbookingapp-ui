function register() {
  event.preventDefault();
  var name = $("#name").val();
  var mobile_number = $("#mobile").val();
  var email = $("#email").val();
  var user_name = $("#username").val();
  var role = "user";
  var password = $("#password").val();
  var confirm_password = $("#confirm").val();
  let user_details = {
    Name: name,
    Mobile_no: mobile_number,
    Email: email,
    "user name": user_name,
    role: role,
  };

  if (name == "" || name == null || name.trim == "") {
    toastr.error("Invalid Name");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (mobile_number == "") {
    toastr.error("Invalid Number");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (email == "") {
    toastr.error("Invalid Email Id");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (user_name == "") {
    toastr.error("Invalid User name");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (password == "") {
    toastr.error("Invalid Password");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (confirm_password == "") {
    toastr.error("Invalid Confirm Password");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  }
  if (password != confirm_password) {
    toastr.error("Password does't match");
    setTimeout(function () {
      console.log("toastr completed");
    }, 3000);

    return false;
  } else {
    console.log(user_details);
    let url =
      "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);
    let formData = {
      name: name,
      mobilenumber: mobile_number,
      email: email,
      username: user_name,
      role: role,
      password: password,
      confirm_password: confirm_password,
    };
    axios
      .post(url, formData, { headers: { Authorization: basicAuth } })
      .then((res) => {
        let data = res.data;
        console.log(data);
        toastr.success("Successfully Register");
        setTimeout(function () {
          window.location.href = "login.html";
        }, 3000);
      })
      .catch((err) => {
        console.error(err.response.data);
        toastr.success("Unable to register");
        setTimeout(function () {
          console.log("toastr completed");
        }, 3000);
      });
  }
}
function back() {
  window.location.href = "index.html";
}
