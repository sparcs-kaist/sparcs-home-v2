/*************************************************
 * Mysql Configuration
 *    @description morgan configuration object
 *    @author      lannstark
 *************************************************/

"use strict"

// TODO : After RDS setup, configure production

const config = {
  production: {
    client: "mysql2",
    connection: {
      host: "",
      user: "",
      password: "",
      database: "",
      charset: "utf8"
    }
  },
  local: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "sparcs_home",
      charset: "utf8"
    }
  }
}


/**
 * Export modules
 */

module.exports = config[process.env.MODE]
