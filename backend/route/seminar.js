/*************************************************
 * Seminar router
 *    @description Router about seminars
 *    @author      lannstark
 *************************************************/

"use strict"


/**
 * Module dependencies
 */

const express = require("express")
const router = express.Router()
const path = require("path")
const fs = require("fs")
const AWS = require("aws-sdk")


/**
 * AWS Configuration
 */

const credentials = new AWS.SharedIniFileCredentials({ profile: "sparcs" })
AWS.config.credentials = credentials
const s3 = new AWS.S3({ apiVersion: "2006-03-01" })


/**
 * POST /seminar
 * @description Create seminar in DB
 */

router.post("", (req, res) => {
 
  // TODO : Cookie check

  const { title, speaker, content } = req.body

  // Check Input Validation
  if (title.length > 30) {
    return res.json({ success: false, error: "TITLE_LENGTH" })
  }
  
  const utitle = title.replace(" ", "_")
  const uspeaker = speaker.replace(" ", "_")
  const fileName = `${uspeaker}_${utitle}_${Date.now()}.pdf`

  if (speaker.length > 30) {
    return res.json({ success: false, error: "SPEAKER_LENGTH" })
  }

  // Save information about seminar in DB
  db.createSeminar(utitle, uspeaker, fileName, (error, result) => {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      // Store file in local
      const filePath = path.join(__dirname, "/../tmp", fileName)
      const strContent = content.replace(/^data:application\/pdf;base64,/, "")
      const buffer = Buffer.from(strContent, "base64")
      fs.writeFileSync(filePath, buffer)
      log.info(`Successfully save seminar file ${fileName} in local`)

      const params = {
        Bucket: "sparcs.home",
        Key: "seminars/" + fileName,
        Body: buffer
      }

      s3.upload(params, (error, result) => {
        if (error) {
          // TODO : notify to administartor
        } else {
          log.info(`Successfully save seminar file in S3 with key ${result.key}`)
        }
      })

      return res.json({ success: true, error: null })
    }
  })
  
})


/**
 * GET /seminars
 * @description Return seminar lists in DB
 */

router.get("", (req, res) => {
  db.getSeminars(req.query.order, function (error, result) {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      return res.json({ success: true, error: null, result: result})
    }
  })

})


/**
 * Module export
 */ 

module.exports = router
