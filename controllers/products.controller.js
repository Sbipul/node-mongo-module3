module.exports.getAllProducts = async (req, res,next) => {
//   const {ip,query,params,body,headers} = req;
//   res.download(__dirname + '/products.controller.js');
    // res.redirect("/login")
    res.send("get all product get request found")
};
module.exports.saveProduct = async(req,res)=>{
    // const product = req.body
    // const result = await productsCollection.insertOne(product)
    res.send('add a product post request found')
}