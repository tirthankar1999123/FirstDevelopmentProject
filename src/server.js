import dns from 'node:dns'
dns.setServers(['1.1.1.1','8.8.8.8']);


import dotenv from 'dotenv/config'

import connectDB from "./db/index.js";





// dotenv.config({
//     path: "./env"
// })





connectDB()


// First approach 

/*

;(async () =>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{

            console.log("ERR: ", error)
            throw error

        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()


*/