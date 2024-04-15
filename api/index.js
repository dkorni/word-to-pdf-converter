const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const documentRoute = require('./routes/document.route')
const app = express()

// plugin middleware
app.use(express.json())

app.use(fileUpload({
    useTempFiles : false,
    //tempFileDir : '/tmp/'
}));


// routes
app.use("/api/products", productRoute);
app.use("/api/documents", documentRoute);
// Note that this option available for versions 1.0.0 and newer. 

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