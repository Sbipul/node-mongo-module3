const { MongoClient } = require('mongodb');
const express = require('express')
const ObjectId = require('mongodb').ObjectId
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 7000
const productsRoute = require("./routes/v1/products.route")
app.use(cors())
app.use(express.json())

dbConnect()
app.use("/api/v1/products",productsRoute)


const run = async() =>{
    try{
        // await client.connect()
        // const database = client.db("watch_world");
        // const productsCollection = database.collection("products");
        // const orderCollection = database.collection("orders");
        // const reviewCollection = database.collection("reviews");
        // const userCollection = database.collection("users");


        // app.post('/order',async(req,res)=>{
        //     const order = req.body
        //     const result = await orderCollection.insertOne(order)
        //     res.send(result)
        // })

        // app.get('/order',async(req,res)=>{
        //     const cursor = orderCollection.find({})
        //     const result = await cursor.toArray()
        //     res.send(result)
        // })

        // app.get('/order/:email', async(req,res)=>{
        //     const email = req.params.email
        //     const result = await orderCollection.find({ email: email }).toArray();
        //     res.send(result);
        // })

        // app.delete('/order/:id', async(req,res)=>{
        //     const id = req.params.id
        //     const cursor = {_id : ObjectId(id)}
        //     const result = await orderCollection.deleteOne(cursor)
        //     res.json(result)
        //     console.log(result)
        // })

        // app.put('/order/:id', async(req,res)=>{
        //     const id = req.params.id
        //     const cursor = {_id : ObjectId(id)}
        //     const updateStatus = {$set : {status : 'Approved'}}
        //     const result = await orderCollection.updateOne(cursor,updateStatus)
        //     res.json(result)
        // })


        // app.post('/review',async(req,res)=>{
        //     const order = req.body
        //     const result = await reviewCollection.insertOne(order)
        //     res.send(result)
        // })

        // app.get('/review',async(req,res)=>{
        //     const cursor = reviewCollection.find({})
        //     const result = await cursor.toArray()
        //     res.send(result)
        // })

        // app.post('/users',async(req,res)=>{
        //     const product = req.body
        //     const result = await userCollection.insertOne(product)
        //     res.json(result)
        // })

        // app.get('/users/:email',async(req,res)=>{
        //     const email = req.params.email
        //     const query = {email : email}
        //     const user = await userCollection.findOne(query)
        //     let isAdmin = false
        //     if (user?.role === 'admin') {
        //         isAdmin = true
        //     }
        //     res.json({admin : isAdmin})
        // })

        // app.put('/admin',async(req,res)=>{
        //     const user = req.body
        //     const filter = {email : user?.email}
        //     const updateDoc = {$set : {role : 'admin'}}
        //     const result = await userCollection.updateOne(filter,updateDoc)
        //     res.json(result)
        // })
    }
    finally{

    }
}

run().catch(console.dir)



app.get('/',(req,res)=>{
    res.send('This is home')
})
app.all("*",(req,res)=>{
    res.send("No route found")
})

app.listen(port,()=>{
    console.log('port is running on port' ,port)
})