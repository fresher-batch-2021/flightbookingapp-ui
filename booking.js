function display_flight(){
    let add_flight = [{
        flight:4004,
        from:chennai,
        to:mumbai,
        price:5500,
    },
    ];
    let content = "";
    for(let x of add_flight){
        content = content + "<tr><td>"+ x.flight+ "</td><td>"+ x.from+ "</td><td>"+x.to+ "</td><td>" +x.price+ "</td></tr>";
    }
    document.querySelector("#tasks_table").innerHTML = content;
}
