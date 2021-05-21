import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from '../img/logo.JPG';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { AuthContext } from '../contexts/AuthContext';
import './Nav.css'

function Nav() {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className='Nav'>

            <div className="top-nav">
                <Link to='/'>
                    <img className='logo' src={logo} alt="Faith and Films Logo"/>
                </Link>

                <Link to='/'>
                    <h1>Faith & Films</h1>
                    </Link>

                <div className="icons">
                    <a className='apple-logo-icon' href='https://podcasts.apple.com/us/podcast/faith-films/id1462853037' target="_blank" rel='noreferrer' >
                        <AppleIcon color='primary' />
                        </a>
                    <a className='youtube-logo-icon' href='https://www.youtube.com/user/Josiah2816' target="_blank" rel='noreferrer'>
                        <YouTubeIcon />
                        </a>
                    <a className='twitter-logo-icon' href='https://twitter.com/faithandfilmz' target="_blank" rel='noreferrer'>
                        <TwitterIcon />
                        </a>
                    <a className='instagram-logo-icon' href='https://www.instagram.com/brojosavedbygrace/' target="_blank" rel='noreferrer'>
                        <InstagramIcon />
                        </a>
                </div>

            </div>

            <NavLink to='/' className='nav-link'>
                Home</NavLink>

            <NavLink to='/about' className='nav-link'>
                About</NavLink>

            <NavLink to='/contact' className='nav-link'>
                Contact</NavLink>

            <Link to='/create' style={{ display: currentUser ? 'initial' : 'none' }}>
                <AddCircleOutlineIcon className='create-review-icon' color='error' /></Link>
            <ExitToAppIcon className='logout-icon' style={{ display: currentUser ? 'initial' : 'none' }}
                color='error' 
                onClick={() => logout()}/>
        </div>
    );
}
export default React.memo(Nav);