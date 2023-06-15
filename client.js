const net = require("net");

const config = {
    port: 3000,
    host: "127.0.0.1"
}

const client = net.createConnection(config);

// client.write("Hey Server!")

client.setEncoding("utf8")

client.on("data", (data)=> {
    console.log(`${data}`)
})

process.stdin.on("data", (key)=>{
    client.write(key);
})