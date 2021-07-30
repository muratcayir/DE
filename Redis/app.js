const redis = require ("redis")
const client = redis.createClient();// Get ve set işlemleri için oluşturuldu

client.on("error",error=>{
    console.error( "error")
})

//SET


// client.set("user_name","gokhan",(error,message)=>{
//     if(error)
//     {
//         console.log(error)
//     }

//     console.log("message",message)
// })

// //GET

// client.get("user_name",(error,message)=>{
//     if(error){
//         console.error(error)
//     }

//     console.log("message",message)
// })

// client.DEL("user_name",(error,message)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("del",message)
// })

// client.append("last_name","cayir",(error,message)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("append",message)
// })

// client.exists("user_name",(error,message)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("exists",message)
// })


client.on("message",(channel,message)=>{
    console.log(`${channel} kanalına ${message} mesajı iletildi...`)
})

client.subscribe("arin");