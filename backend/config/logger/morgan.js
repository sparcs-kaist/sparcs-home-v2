/*************************************************
 * Morgan configuration
 *    @description morgan configuration object
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Export modules 
 */

module.exports = {

  morgan: {
    stdout: {
      format: "combined",
      option: {
        skip: function(req, res) {
          return res.statusCode >= 400
        },
        stream: process.stdout
      }
    },
    stderr: {
      format: "combined",
      option: {
        skip: function(req, res) {
          return res.statusCode < 400
        },
        stream: process.stderr
      }
    }
  }

}
