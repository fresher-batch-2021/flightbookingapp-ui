const routes = [
    { path: '', redirectTo: 'index.html', pathMatch: 'full'},
    { path: 'index.html' },
    { path: 'login.html' },
    { path: 'register.html' },
    { path: 'homepage.html', role: ["user"] },
    { path: 'booking.html', role: ["user"] },
    { path: 'passenger_details.html', role: ["user"] },
    { path: 'ticket.html', role: ["user"] },
    { path: 'mybooking.html', role: ["user"] },
    { path: 'flightlist.html', role: ["admin"] },
    { path: 'all_flights.html', role: ["admin"] },
    { path: 'add_flight.html', role: ["admin"] },
    { path: 'booking_details.html', role: ["admin"] },
    { path: 'passenger_list.html', role: ["admin"] },
    { path: 'userlist.html', role: ["admin"] },
];


function checkAccess(pageName, role) {
    let isAllowed = false;
    for (let route of routes) {
        if (route.path == pageName) {
            if (!route.role) {
                isAllowed = true;
                break;
            } else if (route.role.includes(role)) {
                isAllowed = true;
                break;
            }
        }
    }
    //Need to write logic
    return isAllowed;
}
(function(){
console.log("Routes initializing")
let user = JSON.parse(localStorage.getItem("logged_in_users"));
let role = user != null ? user.role : null;
let pathName = window.location.pathname.substr(1);
console.log("Path Name:", pathName, ",role=", role);
let allowedAccess = checkAccess(pathName, role);

console.log("Access :", allowedAccess);

if (!allowedAccess) {
    alert("You are not authorized to access this page. Redirecting to login page");
    window.location.href = "login.html";
}
}) ();