const express = require("express");
const productController = require("../../controllers/products.controller");
const router = express.Router()

// router.get('/',async(req,res)=>{
//     const cursor = productsCollection.find({})
//     const result = await cursor.toArray()
//     res.send('products found')
// })

// router.post('/',async(req,res)=>{
//     const product = req.body
//     const result = await productsCollection.insertOne(product)
//     res.send(result)
// })

// router.get('/:id',async(req,res)=>{
//     const id = req.params.id
//     const cursor = {_id : ObjectId(id)}
//     const result = await productsCollection.findOne(cursor)
//     res.send(result)
// })

// router.delete('/:id',async(req,res)=>{
//     const id = req.params.id
//     const cursor = {_id : ObjectId(id)}
//     const result = await productsCollection.deleteOne(cursor)
//     res.json(result)
// })
router
.route("/")
.get(productController.getAllProducts)
.post(productController.saveProduct)
module.exports = router;
// Products all methods ends here