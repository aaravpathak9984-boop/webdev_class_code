const express = require('express');

const route = express.Router();

const gigController=require("../controllers/gigController");

route.get("/", gigController.orderTrack);

route.get("/assignOrders", gigController.assignOrdres);


module.exports = route;