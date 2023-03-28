const express = require('express')
const router = express.Router()
const apimodels = require('../models/apimodel')

router.get('/get', async (req, res) => {
    try {
        //res.send("hello get msg")
        const api = await apimodels.find()
        res.json(api)
    }
    catch (err) {
    
        res.send(`Error: ` + err)
    }

    //res.send("hello get msg")
})

router.post('/post', async(req, res)=>{
    const apip = new apimodels({
        name:req.body.name,
        mob:req.body.mob,
        place:req.body.place,
        state:req.body.state,
        indate:req.body.indate,
        outdate:req.body.outdate,
        idproof:req.body.idproof
    })

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const a1 = await apip.save()
         res.json(a1)
    // try {
    //     const a1 = await apip.save()
    //     res.json(a1)
    // }
    // catch(err){
    //     res.send('Error')
    // }
})

module.exports = router
