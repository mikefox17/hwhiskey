const express = require('express')
const router = express.Router()

const {
    getDram,
    getAllDrams,
    addDram,
    updateDram,
    deleteDram,
} = require('../controllers/dramController')

router.route('/').get(getAllDrams).post(addDram)
router.route('/:id').get(getDram).put(updateDram).delete(deleteDram)

module.exports = router
