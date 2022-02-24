import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { DramProvider } from './dramContext'

const App = () => {
    //use effect to make a post request to the backend to get the user data

    return (
        <DramProvider>
            <Router>
                <div className='container'>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                    </Routes>
                </div>
            </Router>
        </DramProvider>
    )
}
export default App
