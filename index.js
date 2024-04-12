const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app = express()

// plugin middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from node api");
})

app.get('/api/products', async(req,res)=>{
    try{
        var products = await Product.find({});
        res.status(200).json(products)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
})

app.get('/api/products/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        var products = await Product.findById(id);
        res.status(200).json(products)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
})

app.post("/api/products", async (req, res)=>{

    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

app.put("/api/products/:id", async (req, res)=>{

    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

mongoose.connect('mongodb+srv://dencreativkor:meFVK7yHT7uYdHZ9@cluster0.z0k3fsx.mongodb.net/doc-to-pdf-api?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected to mongodb");
    
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    })
})
.catch(()=>{
    console.log("Connection to mongodb failed");
})