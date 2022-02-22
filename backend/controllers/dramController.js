const asyncHandler = require('express-async-handler')
const Dram = require('../models/dramModel')

//@desc    Get single dram
//@route   GET /api/drams/:id
//@access  Public
const getDram = asyncHandler(async (req, res) => {
    const dram = await Dram.findById(req.params.id)

    if (!dram) {
        res.status(400)
        throw new Error('Dram not found')
    }

    res.status(200).json(dram)
})

//@desc     get drams
//@route    GET /api/drams
//@access   Public
const getAllDrams = asyncHandler(async (req, res) => {
    const drams = await Dram.find()
    res.status(200).json(drams)
})

//@desc     add a dram
//@route    POST /api/drams
//@access   Public
const addDram = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('text is required')
    }

    const dram = await Dram.create(req.body)
    res.status(200).json(dram)
    console.log(req.body.text)
})

//@desc    update a dram
//@route   PUT /api/drams/:id
//@access  Private
const updateDram = asyncHandler(async (req, res) => {
    const dram = await Dram.findById(req.params.id)

    if (!dram) {
        res.status(404)
        throw new Error('Dram not found')
    }

    const updatedDram = await Dram.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedDram)
})

//@desc    delete a dram
//@route   DELETE /api/drams/:id
//@access  Private
const deleteDram = asyncHandler(async (req, res) => {
    const dram = await Dram.findById(req.params.id)

    if (!dram) {
        res.status(400)
        throw new Error('Dram not found')
    }

    await dram.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getDram,
    getAllDrams,
    addDram,
    updateDram,
    deleteDram,
}
