const mongoose = require('mongoose')

const dramSchema = new mongoose.Schema(
    {
        dramName: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        distillery: {
            type: String,
            required: true,
        },

        proof: {
            type: Number,
            required: true,
        },
        ageStatement: {
            type: Number,
        },
        score: {
            type: Number,
            min: 1,
            max: 10,
            required: true,
        },
        tastingNotes: {
            type: String,
            required: true,
        },
        msrp: {
            type: Number,
            rewuired: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Dram', dramSchema)
