const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades');

router.post("/",trades.createTrades)
router.get("/",trades.allTrades)
router.get("/:id",trades.singleTrade)
router.delete("/:id",trades.deleteTrade)
router.patch("/:id",trades.updatePrice);


module.exports = router;
