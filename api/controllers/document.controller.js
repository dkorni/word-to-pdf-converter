const Docuemnt = require('../models/document.model')
const {uploadObject} = require('../services/space-manager')

const getDocuments = async (req, res)=>{
    try{
        var products = await Docuemnt.find({});
        res.status(200).json(products)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

const getDocumentById = async(req,res)=>{
    try{
        const { id } = req.params;
        var products = await Docuemnt.findById(id);
        res.status(200).json(products)
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

const createDocument = async (req, res)=>{

    try{
        const file = req.files.file;
        const documentMetadata = {name:file.name, size:file.size};
        
        const document = await Docuemnt.create(documentMetadata);
        await uploadObject(document.id, file);

        res.status(200).json({document})
    }catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getDocuments,
    getDocumentById,
    createDocument
};