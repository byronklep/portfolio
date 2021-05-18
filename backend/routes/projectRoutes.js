import express from 'express'
const router = express.Router()
import {
  getProjects,
  getProjectById,
  deleteProject,
  getFourProjects,
  // updateProject,
  // createProject,
} from '../controllers/projectController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProjects)
router.route('/four').get(getFourProjects)
router.route('/:id').get(getProjectById).delete(protect, admin, deleteProject)

export default router
