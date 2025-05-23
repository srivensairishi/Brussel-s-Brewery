import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggle = () => setMenuOpen(m => !m)
    // Close menu after click (for mobile)
    const handleNavClick = () => setMenuOpen(false)
    return(
        <>
            <div className='background'>
                <div className='bb2'>
                <div className='bb'>
                    <div>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 28C48 37.9411 39.9411 46 30 46C20.0589 46 12 37.9411 12 28H48Z" stroke="#4A342E" stroke-width="2"/>
                        <path d="M20 12C20 12 20 16 24 18C28 20 28 24 28 24" stroke="#4A342E" stroke-width="2" stroke-linecap="round"/>
                        <path d="M32 12C32 12 32 16 36 18C40 20 40 24 40 24" stroke="#4A342E" stroke-width="2" stroke-linecap="round"/></svg>
                    </div>
                    <p className='bbtext'>BRUSSELS BREWERY</p>
                    <button className='hamburger' aria-label='Toggle navigation' onClick={handleToggle}>
                        <span className={menuOpen ? 'bar open' : 'bar'}></span>
                        <span className={menuOpen ? 'bar open' : 'bar'}></span>
                        <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    </button>
                </div> 
                <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
                    <Link to="/" onClick={handleNavClick}><button className='nav-button'>Home</button></Link>
                    <Link to="/blog" onClick={handleNavClick}><button className='nav-button'>Blog</button></Link>
                    <Link to="/about-us" onClick={handleNavClick}><button className='nav-button'>About Us</button></Link>
                    <Link to="/menu" onClick={handleNavClick}><button className='nav-button'>Menu</button></Link>
                    <Link to="/testimonials" onClick={handleNavClick}><button className='nav-button'>Testimonials</button></Link>
                </nav>
                </div>  
            </div>    

        </>
    )

}    

export default Header