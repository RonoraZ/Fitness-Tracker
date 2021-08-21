const router = require("express").Router() 

router.use('/api', require('./api')) 

router.use("/", require('./view')) 

model.exports = router