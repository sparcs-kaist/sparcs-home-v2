/*************************************************
 * Application Setup
 *    @description Application Object
 *    @author      lannstark
 *************************************************/


"use strict"


/**
 * Moudle dependencies
 */ 

const path = require("path")
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const morganConfig = require("@morganConfig").morgan

const app = new express()


/**
 * Express middleware
 */ 

app.use(cors())
app.use(helmet())
app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ extended: false, limit: "5mb" }))
app.use(path.posix.join("/", "static"), express.static("./tmp"))
app.use(morgan(morganConfig.stdout.format, morganConfig.stdout.option))
app.use(morgan(morganConfig.stderr.format, morganConfig.stderr.option))


/**
 * Routers
 */

const router = require("@router")
const seminar = require("@seminar")
const auth = require("@authentication")
const project = require("@project")

app.use("/", router)
app.use("/seminar", seminar)
app.use("/auth", auth)
app.use("/project", project)


/**
 * Export express instance
 */

module.exports = app
