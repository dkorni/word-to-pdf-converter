const express = require("express")
const router = express.Router()
const {getDocumentById, getDocuments, createDocument } = require('../controllers/document.controller');

router.get('/', getDocuments);
router.get('/:id', getDocumentById)
router.post('/', createDocument)

module.exports = router