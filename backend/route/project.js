/*************************************************
 * Project router
 *    @description Router about projects
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Module dependencies
 */

const express = require("express")
const router = express.Router()


/**
 * GET /project
 */

router.get("", (req, res) => {
  db.getProjects((error, result) => {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      return res.json({ success: true, error: null, result: result })
    }
  })
})

/*
 *
 * Module export
 */ 

module.exports = router

