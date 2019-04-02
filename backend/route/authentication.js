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

router.get("/login", (req, res) => {
  const loginParams = client.getLoginParams()
  res.redirect(loginParams.url)
})


/**
 * GET /auth/login/callback
 */ 

router.get("/login/callback", (req, res) => {
  // TODO : state check, cookie Hashing
  client.getUserInfo(req.query.code)
  .then((response) => {
    if (response.hasOwnProperty("sparcs_id") === true) {
      res.cookie(secretConfig.cookieName, JSON.stringify({isSparcs: true, name: response.sparcs_id}))
    } else {
      res.cookie(secretConfig.cookieName, JSON.stringify({isSparcs: false}))
    }
    res.redirect(secretConfig.entryPoint)
  })
})


/**
 * Export router
 */

module.exports = router
