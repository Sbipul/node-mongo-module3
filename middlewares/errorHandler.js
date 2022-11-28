const errorHandler = (err,req,res,next) =>{
    res.send("error found")
}
module.exports = errorHandler;
