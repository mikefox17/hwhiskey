import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'redaxios'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const url = 'http://localhost:5001/api/users/login'
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
                            <h2>Welcome back</h2>

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

                            {error && <div>{error}</div>}
                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
