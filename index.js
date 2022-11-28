//================================ import || required files ====================================
//============================================================================================//
const express = require('express')
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 7000


//=================================== routes import =============================================
//=============================================================================================//
const productsRoute = require("./routes/v1/products.route");
const errorHandler = require('./middlewares/errorHandler');


//================================== middleware calls ==========================================
//============================================================================================//
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.set('view engine','ejs')

//================================= database connect ===========================================
//============================================================================================//
dbConnect()

//====================================== routes calls ==========================================
//============================================================================================//
app.use("/api/v1/products",productsRoute)


app.get('/',(req,res)=>{
    // res.sendFile(__dirname + "/public/index.html")
    res.render("home.ejs",{
        id:5
    })
})
app.all("*",(req,res)=>{
    res.send("No route found")
})
//================== application global error handler middleware =============================
//============================================================================================
app.use(errorHandler)

app.listen(port,()=>{
    console.log('port is running on port' ,port)
})
//================================== for unhandled error ======================================
//===========================================================================================//
process.on("unhandledRejection",(error)=>{
    console.log(error.name,error.message)
    app.close(()=>{
        process.exit(1)
    })
})