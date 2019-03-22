/*************************************************
 * Authentication router
 *    @description Handle login, logout
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Module dependencies
 */

const express = require("express")
const router = express.Router()
const ssoClient = require("@ssoClient")
const secretConfig = require("@secretConfig")
const client = new ssoClient(secretConfig.ssoClientId, secretConfig.ssoSecretKey)


/**
 * POST /auth/login
 * @desription Handle login
 */

router.post("/login", (req, res) => {
  const loginParams = client.getLoginParams()
  res.redirect(301, loginParams.url)
})


/**
 * GET /auth/login/callback
 * TODO : change /login/callback to /auth/login/callback
 */ 


/**
 * Export router
 */

module.exports = router
