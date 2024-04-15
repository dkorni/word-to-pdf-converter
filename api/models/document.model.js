const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const DocumentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter document name"]
        },
        size:{
            type:Number,
            required:[true, "Please enter document size"]
        },
        originalUrl:{
            type:String,
            required:false
        },
        convertedUrl:{
            type:String,
            required:false
        }
     },
     {
        timestamps: true,
     }
);

const Document = mongoose.model("Document", DocumentSchema);

module.exports = Document;