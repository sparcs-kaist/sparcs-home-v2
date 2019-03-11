/*************************************************
 * Default router
 *    @description Default router
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Module dependencies
 */

const express = require("express")
const router = express.Router()

router.get("/ping", (req, res) => {
  res.send("OK")
})


/**
 * Module export
 */ 

module.exports = router
