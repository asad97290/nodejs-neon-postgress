let Trade = require("../models/trades")
exports.createTrades = async(req,res)=>{
    try{
    let tradeObj = await Trade.create({
        type: req.body.type,
        user_id: req.body.user_id,
        symbol: req.body.symbol,
        shares: req.body.shares,
        price: req.body.price,
        timestamp: Date.now(),
    })
    res.status(201).send(tradeObj);
}catch(err){
    res.status(500).send(err);
}
}

exports.allTrades = async(req,res)=>{
    
    let tradeObj = await Trade.findAll({
    })
    res.status(200).send(tradeObj);
}
exports.singleTrade = async(req,res)=>{
    console.log("req.params.id",req.params.id)
    let tradeObj = await Trade.findOne({where:{id:req.params.id}}
    )
    if(!tradeObj){

        res.status(404).send("ID not found");
    }
    res.status(200).send(tradeObj);
}




exports.deleteTrade = async(req,res)=>{
    try{
    console.log("req.params.id",req.params.id)
    await Trade.destroy({where:{id:req.params.id}})
 
    res.status(200).send("deleted successfully");
}catch(err){
    res.status(500).send(err);
}
}
exports.updatePrice = async(req,res)=>{
    console.log("req.params.id",req.body.newPrice)
    let tradeObj = await Trade.update({price:req.body.newPrice},{where:{id:req.params.id}}
    )
    if(!tradeObj){

        res.status(404).send("ID not found");
    }
    res.status(200).send(tradeObj);
}