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
 * GET /login/callback
 * @description After user's login, get callback from SSO
 */

router.get("/login/callback", (req, res) => {
  console.log(req.query)
})


/**
 * Module export
 */ 

module.exports = router
