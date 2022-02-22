const asyncHandler = require('express-async-handler')
const Dram = require('../models/dramModel')
const User = require('../models/userModel')

//@desc   Get all drams
//@route  GET /api/drams
//@access Public
const getAllDrams = asyncHandler(async (req, res, next) => {
    const drams = await Dram.find()
    res.status(200).json(drams)
})

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

//@desc     get all user drams
//@route    GET /api/me-drams
//@access   Public
const getAllUserDrams = asyncHandler(async (req, res) => {
    const drams = await Dram.find({ user: req.user.id })
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

    const dram = await Dram.create({ ...req.body, user: req.user.id })

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

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (global.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (global.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await dram.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAllDrams,
    getDram,
    getAllUserDrams,
    addDram,
    updateDram,
    deleteDram,
}
