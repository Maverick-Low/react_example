import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click); // Changes hamburger icon
    const closeMobileMenu = () => setClick(false); // Close nav menu on mobile when a navbar link is clicked and user is redirected to a different page


    // Show button only on larger screens > 960px width
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect( () => { showButton() }, []);

    window.addEventListener('resize', showButton); // Listening for resize events to determine whether button should be shown based on screen size

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>

                    <Link to = "/" className = 'navbar-logo'>
                        Logo <i className="fab fa-typo3"></i>
                    </Link>

                    <div className='menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
                    </div>

                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className= 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/services' className= 'nav-links' onClick = {closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/products' className= 'nav-links' onClick = {closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className= 'nav-links-mobile' onClick = {closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    
                    {button && <Button buttonStyle = 'btn--outline'> SIGN UP </Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar
