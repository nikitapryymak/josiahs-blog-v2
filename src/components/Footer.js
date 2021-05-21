import { makeStyles, Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

const useStyles = makeStyles({
    footer: {
        marginTop: '.75rem',
    }
});

export default function Footer() {

    const classes = useStyles();
    const date = new Date();

    return (
        <footer>
            <a href='https://podcasts.apple.com/us/podcast/faith-films/id1462853037' target="_blank" rel='noreferrer' >
                <AppleIcon />
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
            <Typography variant='body2' color='primary' className={classes.footer}>&copy; {date.getFullYear()} Faith & Films</Typography>
        </footer>
    )
}