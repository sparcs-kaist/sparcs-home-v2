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
const secretConfig = require("@secretConfig")


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


/**
 * POST /project
 */

router.post("", (req, res) => {
  // Check query validation
  const { title, pm, explanation, homepage, github} = req.query
  if (title === "" || pm === "" || explanation === "") {
    return res.json({ success: false, error: "INVALID_QUERY" })
  }

  // Check Authentication
  const cookie = JSON.parse(req.get("authorization"))
  if (cookie.isSparcs === false) {
    return res.json({ success: false, error: "NOT_AUTHORIZATION"})
  } else if (cookie.name !== secretConfig.adminName) {
    return res.json({ success: false, error: "NOT_AUTHORIZATION"})
  }

  // Create a new project
  const newProject = {
    title: title,
    pm: pm,
    explanation: explanation,
    homepage_url: homepage,
    github_url: github
  }

  db.createProject(newProject, (error, result) => {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      return res.json({ success: true, error: null, result: result })
    }
  })
})


/**
 * PUT /project
 */

router.put("", (req, res) => {
  // Check query validation
  const { id, title, pm, explanation, homepage, github} = req.query
  if (id === "" || title === "" || pm === "" || explanation === "") {
    return res.json({ success: false, error: "INVALID_QUERY" })
  }

  // Check Authentication
  const cookie = JSON.parse(req.get("authorization"))
  if (cookie.isSparcs === false) {
    return res.json({ success: false, error: "NOT_AUTHORIZATION"})
  }

  db.getProjectWithId(id, (error, result) => {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      const project = JSON.parse(JSON.stringify(result))[0]
      // Check deepen authentication
      if (cookie.name !== project.pm && cookie.name !== secretConfig.adminName) {
        return res.json({ success: false, error: "NOT_AUTHORIZATION"})
      }

      // Update DB
      const newProject = {
        id: id,
        title: title,
        pm: pm,
        explanation: explanation,
        homepage_url: homepage,
        github_url: github
      }
      db.updateProjectWithId(newProject, (error, result) => {
        if (error) {
          return res.json({ success: false, error: error })
        } else {
          return res.json({ success: true, error: null, result: result })
        }
      })
    }
  })

})


/**
 * Delete /project
 */

router.delete("", (req, res) => {
  const { id } = req.query
  // Validate query
  if (id === "") {
    return res.json({ success: false, error: "INVALID_QUERY" })
  }

  // Check Authentication
  const cookie = JSON.parse(req.get("authorization"))
  if (cookie.isSparcs === false) {
    return res.json({ success: false, error: "NOT_AUTHORIZATION"})
  }

  db.getProjectWithId(id, (error, result) => {
    if (error) {
      return res.json({ success: false, error: error })
    } else {
      const project = JSON.parse(JSON.stringify(result))[0]
      // Check deepen authentication
      if (cookie.name !== project.pm && cookie.name !== secretConfig.adminName) {
        return res.json({ success: false, error: "NOT_AUTHORIZATION"})
      }

      db.deleteProjectWithId(id, (error, result) => {
        if (error) {
          return res.json({ success: false, error: error })
        } else {
          return res.json({ success: true, error: null, result: result })
        }
      })
    }
  })

})


/**
 * Module export
 */ 

module.exports = router
