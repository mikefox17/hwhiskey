import { useState } from 'react'
import axios from 'redaxios'

const Review = () => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const [reviewData, setReviewData] = useState({
        dramName: '',
        company: '',
        distillery: '',
        proof: null,
        ageStatement: null,
        score: null,
        tastingNotes: '',
        msrp: null,
    })

    const handleChange = ({ currentTarget: input }) => {
        setReviewData({ ...reviewData, [input.name]: input.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const url = 'http://localhost:5001/api/drams'

            const { data: res } = await axios.post(url, reviewData, config)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form
                action='
            '
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleChange}
                    value={reviewData.dramName}
                    name='dramName'
                    type='text'
                    placeholder='Bottle Name'
                />
                <input
                    value={reviewData.company}
                    onChange={handleChange}
                    name='company'
                    type='text'
                    placeholder='Company'
                />
                <input
                    onChange={handleChange}
                    value={reviewData.distillery}
                    name='distillery'
                    type='text'
                    placeholder=' Distillery'
                />
                <input
                    onChange={handleChange}
                    value={reviewData.proof}
                    name='proof'
                    type='number'
                    placeholder='Proof'
                />
                <input
                    onChange={handleChange}
                    value={reviewData.ageStatement}
                    name='age'
                    type='number'
                    placeholder='Age'
                />
                <input
                    onChange={handleChange}
                    value={reviewData.score}
                    name='score'
                    type='number'
                    placeholder='Score'
                />
                <input
                    onChange={handleChange}
                    value={reviewData.msrp}
                    name='msrp'
                    type='number'
                    placeholder='MSRP'
                />

                <textarea onChange={handleChange} name='tastingNotes' />
                <button type='submit' onSubmit={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Review
