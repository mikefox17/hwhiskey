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
import { DramProvider } from './dramContext'
import { ToastContainer } from 'react-toastify'
import { UserContext } from './UserContext'

const App = () => {
    const isLoggedIn = localStorage.getItem('token')

    //use effect to make a post request to the backend to get the user data

    return (
        <UserContext.Provider value='hello from context'>
            <DramProvider>
                <ToastContainer />
                <Router>
                    <div className='container'>
                        <Nav />
                        <Routes>
                            {isLoggedIn ? (
                                <Route path='/' element={<Dashboard />} />
                            ) : (
                                <>
                                    <Route path='/login' element={<Login />} />
                                    <Route
                                        path='/register'
                                        element={<Register />}
                                    />
                                </>
                            )}
                        </Routes>
                    </div>
                </Router>
            </DramProvider>
        </UserContext.Provider>
    )
}
export default App
