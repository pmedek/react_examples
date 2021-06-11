import {
    NavLink
} from "react-router-dom";
import './styles.scss';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavLink to="/" exact activeClassName="selected">
                Home
            </NavLink>
            {' | '}
            <NavLink to="/examples" activeClassName="selected">
                Examples
            </NavLink>
            {' | '}
            <NavLink to="/calculator" activeClassName="selected">
                Calculator
            </NavLink>
        </div>
    )
}

export default Navbar
