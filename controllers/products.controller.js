const products = [
    {id:1,name:'mobile'},
    {id:2,name:'laptop'},
    {id:3,name:'earphone'},
    {id:4,name:'keyboard'},
    {id:5,name:'vr box'},
]
module.exports.getAllProducts = async (req, res,next) => {
    const {limit,page} = req.query;
    console.log(limit,page)
    res.json(products)
};
module.exports.saveProduct = async(req,res)=>{
    const product = req.body
    products.push(product)
    res.send(products)
}
module.exports.getAllDetails = (req,res,next) => {
    const {id} = req.params;
    let foundProduct = products.find(product=> product.id==id)
    res.send(foundProduct)
}
