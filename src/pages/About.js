import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logo from '../img/logo.JPG';
import './About.css'

export default function About() {
    return (
        <div className="About">

            <Typography variant='h1'>
                About Me</Typography>

            <div className='about-content'>
                <img src={logo} alt="Josiah" />
                <Typography variant='body1' color='primary' align='left'>
                    Hi! Thanks for visiting my site! My name is Josiah McClain and the goal of this website is to post reviews for the books that I find edifying to those in the faith. I got into this because I wanted to grow as a Christian and talk to others in the faith about my weaknesses. 
                    <br />
                    <br />
                    I believe that no temptation has overtaken any believer except that which is  common to all in the faith so I've made it my goal to apply these scriptures to the heart of believers when I share my book reviews and movie opinions from a Christian perspective. Thanks for stopping by!
                    <br />
                    <br />
                    Feel free to contact me <Link to='/contact'>here.</Link>
                </Typography>
            </div>

        </div>
    )
}