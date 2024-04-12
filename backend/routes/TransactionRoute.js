const express = require("express")
const { AddTransaction, GetTransaction, UpdateTranscation, DeleteTransaction, getSingleData } = require("../controller/TransactionController")

const Router = express.Router()

Router.post('/',AddTransaction)
Router.get('/',GetTransaction)
Router.get('/:id',getSingleData)
Router.put('/:id',UpdateTranscation)
Router.delete('/:id',DeleteTransaction)


module.exports = Router