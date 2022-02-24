import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'redaxios'

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const url = 'http://localhost:5001/api/users'
            const { data: res } = await axios.post(url, data)
            console.log(res)
            console.log(res.message)
            navigate('/')
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message)
            }

            if (
                error.response &&
                error.response.data &&
                error.response.data.message === 'Passwords do not match'
            ) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <div>
            <div>
                <div>
                    <div>
                        <form className='grid' onSubmit={handleSubmit}>
                            <h2>Create Account</h2>

                            <input
                                type='text'
                                placeholder='username'
                                name='username'
                                onChange={handleChange}
                                value={data.username}
                                required
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={data.email}
                                required
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={handleChange}
                                value={data.password}
                                required
                            />
                            <input
                                type='password'
                                placeholder='Reenter Password'
                                name='password2'
                                onChange={handleChange}
                                value={data.password2}
                                required
                            />

                            {error && <div>{error}</div>}
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register
