import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className="table nav-bar-tabs">
                <ul id="horizontal-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/createReview">Create a Review</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;