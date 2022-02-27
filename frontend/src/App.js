import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom'
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Review from './pages/Review'
import { DramProvider } from './dramContext'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './UserContext'

const App = () => {
    const isLoggedIn = localStorage.getItem('token')

    //use effect to make a post request to the backend to get the user data

    return (
        <UserProvider>
            <DramProvider>
                <ToastContainer />
                <Router>
                    <div className='container'>
                        <Nav />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/review' element={<Review />} />

                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Routes>
                    </div>
                </Router>
            </DramProvider>
        </UserProvider>
    )
}
export default App
