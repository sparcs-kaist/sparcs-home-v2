/*************************************************
 * Mysql Class
 *    @description Mysql Manager
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Moudle dep
 */ 

const knex = require("knex")
const config = require("@mysqlConfig")


/**
 * Mysql Class
 */

class Mysql {

  constructor() {
    this.seminarTable = "seminars"
    this.projectTable = "projects"
  }


  /**
   * initiate
   * @description Connect to Mysql synchronously
   */

  initiate() {
    const that = this
    return new Promise(function (resolve, reject) {
      log.info("Connecto Mysql...")
      that.client = knex(config)
      that.client.raw("select 1+1 as result")
      .asCallback((error, result) => {
        if (error) {
          log.error("Failed to connect to Mysql")
          reject(error)
        } else {
          log.info("Successfully connect to Mysql")
          resolve(1)
        }
      })
    })
  }


  /**
   * createSeminar
   * @description Create a seminar row in Mysql
   * @param {String}   title
   * @param {String}   speaker
   * @param {Function} callback
   */

  createSeminar(title, speaker, fileName, callback) {
    this.client(this.seminarTable).insert({ title: title, speaker: speaker, file_name: fileName})
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /**
   * getSeminars
   * @description Get seminar information in Mysql
   * @param {String} order
   * @param {Function} callback
   */

  getSeminars(order, callback) {
    this.client.select().from(this.seminarTable).orderBy("id", order)
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /**
   * getProjects
   * @description Get project in Mysql
   */ 

  getProjects(callback) {
    this.client.select().from(this.projectTable)
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /**
   * closeConnection
   * @description Close connection to Mysql
   */

  closeConnection() {
    this.client.destroy()
  }

}


/**
 * Export module
 */

module.exports = new Mysql()
