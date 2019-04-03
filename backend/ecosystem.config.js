/*************************************************
 * pm2 configuration
 *    @description process manager configuration
 *    @author      lannstark
 *************************************************/

"use strict"

const APP_NAME = "SPARCS_HOME"

module.exports = {

  apps: [{
      
    
    /**
     * Generatl configuration 
     */ 

    name: APP_NAME,
    script: "./bin/www",
    

    /**
     * Advanced configuration 
     */ 
    
    watch: true,
    ignore_watch: ["out.log", "error.log", "tmp/*"],


    /**
     * Environment configuration
     */

    env: {
      "PORT": 10202,
      "MODE": "local",
      "APP_NAME": APP_NAME
    },
    env_production: {
      "PORT": 10202,
      "MODE": "production",
      "APP_NAME": APP_NAME
    },


    /**
     * Logging configuration
     * TODO: Change log files location after deploy
     */

    log_date_format: "YYYY-MM-DD HH:mm:ss.SSS Z",
    error_file: "error.log",
    out_file: "out.log",


    /**
     * Control flow 
     */
    
    autorestart: false
  }]

}
