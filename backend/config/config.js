/*************************************************
 * Configuration
 *    @description Configuration end point
 *    @author      lannstark
 *    @export      None
 *************************************************/

"use strict"


/**
 * Port sanitization
 */

const port = require("@portSanitizer")(process.env.PORT)


/**
 * Global variable
 */

const variables = {
  log: console,
  port: port,
  mode: process.env.MODE
}

Object.assign(global, variables)
