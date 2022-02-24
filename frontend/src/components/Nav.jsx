import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <h1 id='nav-title'>hWhisky</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/login'>Login 🪵</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register ⎓</Link>
                    </li>
                    <li>
                        <Link to='/'>Drams 🥃</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav
