const gitModel=require("../model/gigModel.js");

const gigController={

    orderTrack:(req,res)=>{
        res.send("order reaching in 5 mintues");
    },

    assignOrder:(req,res)=>{
        res.send("order is assignning to delivery partner")
    }

}

module.exports=gigController;