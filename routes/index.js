const express = require ("express");
const router  = require.Router();   // which allows you to create routes or end points for the api
const productRouter = require("./products")

router.use("/products" , productRouter)   // append the child routes
//route.use("/employee" , employeeRouter )

module.exports = router                                                                                                                                       