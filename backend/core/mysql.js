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


  /*******************************
   * Create
   *******************************/


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
   * createProject
   * @param {Object} newProject
   * @param {Function} callback
   */ 

  createProject(newProject, callback) {
    console.log(newProject)
    this.client(this.projectTable).insert(newProject)
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /*******************************
   * Retrieve
   *******************************/


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
   * getProjectWithId 
   * @param {String}  id
   * @param {Function} callback
   */

  getProjectWithId(id, callback) {
    this.client.where({ id: Number(id) }).select().from(this.projectTable)
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /*******************************
   * Update
   *******************************/


  /**
   * updateProjectWithId
   * @description Update project with Id
   */

  updateProjectWithId(newProject, callback) {
    const { id, title, pm, explanation, homepage_url, github_url } = newProject

    this.client(this.projectTable).where({ id: Number(id) })
    .update({
      title: title,
      pm: pm,
      explanation: explanation,
      homepage_url: homepage_url,
      github_url: github_url
    })
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /*******************************
   * Delete
   *******************************/


  /**
   * deleteProjectWithId
   * @description Delete project with Id
   */

  deleteProjectWithId(id, callback) {
    this.client(this.projectTable).where({ id: Number(id) }).del()
    .asCallback((error, result) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, result)
      }
    })
  }


  /*******************************
   * Util
   *******************************/


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
