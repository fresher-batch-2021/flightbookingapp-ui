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

  try {
    validator.isValidString(name, ErrorMessage.Name);
    validator.isValidMobile(mobile_number, ErrorMessage.MobileNumber);
    validator.isValidString(email, ErrorMessage.Email);
    validator.isValidString(user_name, ErrorMessage.UserName);
    validator.isValidPassword(
      password,
      confirm_password,
      ErrorMessage.Password
    );

    let formData = {
      name: name,
      mobilenumber: mobile_number,
      email: email,
      username: user_name,
      role: role,
      password: password,
      confirm_password: confirm_password,
    };
    user_service
      .register(formData)
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
        toastr.error("Unable to register");
        setTimeout(function () {
          console.log("toastr completed");
        }, 3000);
      });
  } catch (err) {
    console.error(err.message);
    toastr.error(err.message);
  }
}

function back() {
  window.location.href = "index.html";
}
