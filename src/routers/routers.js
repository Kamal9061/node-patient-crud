const express = require('express');
const MensRanking = require("../models/mens")
const router = new express.Router();

router.get("/" , (req , res) => {
    res.send("hello form my side")
})

//create
router.post("/patient" , async(req , res) => {
try{
    const AddMensRecord = new MensRanking(req.body)
    console.log(req.body);
    const Mans = await AddMensRecord.save();
    console.log(Mans , "add Successfully");
    res.status(200).send(Mans)
}catch(err) {
    res.status(400).send("bad Request")
 console.log(err);
}
})

//get
router.get("/patient" , async(req , res) => {
    try{
       const GetMan = await MensRanking.find({}).sort({"ranking":1});
       res.status(200).send(GetMan)
       console.log(GetMan , "All Patient Get Successfully");
    }catch(err) {
        res.status(400).send("bad Request")
     console.log(err);
    }
    })


    //single 
    router.get("/patient/:id" , async(req , res) => {
        try{
            const _id = req.params.id
           const GetSingleMan = await MensRanking.findById(_id)
           res.status(200).send(GetSingleMan)
           console.log(GetSingleMan , "patient Get Successfully");
        }catch(err) {
            res.status(500).send("Internal Server Error")
            console.log(err);
        }
        })

        //update by Id
        router.patch("/patient/:id" , async(req , res) => {
            try{
                const _id = req.params.id
               const UpdateMan = await MensRanking.findByIdAndUpdate(_id , req.body , {
                new:true
               })
               res.status(200).send(UpdateMan)
               console.log(UpdateMan , "patient Update Successfully");
            }catch(err) {
                res.status(500).send("Internal Server Error")
             console.log(err);
            }
            })

            
        router.delete("/patient/:id" , async(req , res) => {
            try{
                const _id = req.params.id
               const deleteMan = await MensRanking.findByIdAndDelete(_id 
               )
               res.status(200).send(deleteMan)
               console.log(deleteMan , "patient Delete Successfully");
            }catch(err) {
                res.status(500).send("Internal Server Error")
             console.log(err);
            }
            })


            router.get("/*" , (req , res) => {
                res.send("404 not found") 
            })


module.exports = router;