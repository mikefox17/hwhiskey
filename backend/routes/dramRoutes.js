const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {
    getAllDrams,
    getDram,
    getAllUserDrams,
    addDram,
    updateDram,
    deleteDram,
} = require('../controllers/dramController')

router.get('/allDrams', getAllDrams)
router.route('/').get(protect, getAllUserDrams).post(protect, addDram)
router
    .route('/:id')
    .get(getDram)
    .put(protect, updateDram)
    .delete(protect, deleteDram)

module.exports = router
