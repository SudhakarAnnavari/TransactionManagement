const Transaction = require("../models/TransactionModel");

const AddTransaction = async (req, res) => {
    try {
        const { CustomerName, Amount, Status } = req.body;

        const transaction = await Transaction.create({
            CustomerName,
            TranscationDate: new Date(),
            Amount,
            Status
        });


        res.status(200).json(transaction);
    } catch (err) {
        res.status(400).json({ msg: "Failed to add data" });
        console.error(err);
    }
};


const GetTransaction = async (req,res) =>{
    try {
        const transaction = await Transaction.find();


        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ msg: "Failed to fetch data" });
        console.error(err);
    }

}


const UpdateTranscation = async(req,res) =>{
    try{
        const id = req.params.id
        const {CustomerName, Amount, Status } = req.body
        const transaction = await Transaction.findByIdAndUpdate(id,{CustomerName, Amount, Status })
        if(!transaction){
            res.status(404)
            res.json({"msg":"transaction not found"})
        }
        res.status(200).json(transaction)
    }
    catch (err) {
        res.status(400).json({ msg: "Failed to update data" });
        console.error(err);
    }
}


// const DeleteTransaction = async(req,res) =>{
//     try{
//         const id = req.params.id
//         const transaction = await Transaction.findByIdAndDelete(id)
//         if(!transaction){
//             res.status(404)
//             res.json({"msg":"transaction not found"})
//         }
//         res.status(200).json(transaction)
//     }
//     catch (err) {
//         res.status(400).json({ msg: "Failed to Delete data" });
//         console.error(err);
//     }
// }
const DeleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = await Transaction.findByIdAndDelete(id);
        if (!transaction) {
            return res.status(404).json({ "msg": "transaction not found" });
        }
        return res.status(200).json(transaction);
    } catch (err) {
        return res.status(400).json({ msg: "Failed to Delete data" });
        console.error(err);
    }
};


const getSingleData = async(req,res) =>{
    try{
        const id = req.params.id
        const transaction = await Transaction.findById(id)
        if(!transaction){
            res.status(404)
            res.json({"msg":"transaction not found"})
        }
        res.status(200).json(transaction)
    }
    catch (err) {
        res.status(400).json({ msg: "Failed to Delete data" });
        console.error(err);
    }
}

module.exports = { AddTransaction, GetTransaction, UpdateTranscation,DeleteTransaction,getSingleData };
