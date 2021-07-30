const redis = require("redis")
const client = redis.createClient();

client.on("error",error=>{
    console.log(error)
})

client.publish("arin","app yolu ile iletildi",(e,number)=>{
    console.log(`Mesaj ${number} kişisine iletildi`)
})