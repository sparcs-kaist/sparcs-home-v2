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


/**
 * GET /ping
 * @description health check
 */

router.get("/ping", (req, res) => {
  res.send("OK")
})


/**
 * Module export
 */ 

module.exports = router
