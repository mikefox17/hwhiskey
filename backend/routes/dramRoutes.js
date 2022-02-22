const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const {
    getDram,
    getAllDrams,
    addDram,
    updateDram,
    deleteDram,
} = require('../controllers/dramController')

router.route('/').get(protect, getAllDrams).post(protect, addDram)
router
    .route('/:id')
    .get(getDram)
    .put(protect, updateDram)
    .delete(protect, deleteDram)

module.exports = router
