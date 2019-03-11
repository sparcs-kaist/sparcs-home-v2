/*************************************************
 * Application Setup
 *    @description Application Object
 *    @author      lannstark
 *************************************************/


"use strict"


/**
 * Moudle dependencies
 */ 

const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const morganConfig = require("@morganConfig").morgan

const app = new express()


/**
 * Express middleware
 */ 

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan(morganConfig.stdout.format, morganConfig.stdout.option))
app.use(morgan(morganConfig.stderr.format, morganConfig.stderr.option))


/**
 * Default router
 */

const router = require("@router")
app.use("/", router)


/**
 * Export express instance
 */

module.exports = app
