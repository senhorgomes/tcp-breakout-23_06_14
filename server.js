const net = require("net");
const rocketsData = require("./mockData.json");
const PORT = 3000;
// First creating the server
const server = net.createServer();
// Once the server is up and running run the callback
server.listen(PORT, ()=>{
    console.log("Yay! Our server works!")
})
// We want to be notified once a connection is made to our server
server.on("connection", (connection)=> {
    // Translate incoming text to actual words
    
    connection.setEncoding("utf8");
    // We see that the connection is an object
    console.log(typeof connection)
    console.log("Hurray someone joined our server!")
    // Once a client sends data, console.log it
    connection.write("Please choose a rocket from the list below:\n")
    // Menu for the rockets
    let rocketList = "";
    rocketsData.forEach((rocket, index)=>{
        rocketList += `${index + 1}. ${rocket.name}\n`
    })
    connection.write(rocketList)
    connection.on("data", (data)=>{
        const rocketIndex = Number(data) - 1;

        const selectedRocket = rocketsData[rocketIndex];

        connection.write(selectedRocket.description)
    })
})


