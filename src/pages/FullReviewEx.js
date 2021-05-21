import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import './FullReview.css';

const useStyles = makeStyles({
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem'
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: '.8rem'
    },
    reviewBody: {
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '2rem'
    },
    header: {
        margin: '2.5rem 0 .85rem',
        fontSize: '1.5rem',
        fontWeight: '600',
    }
});

export default function FullReviewEx() {

    const classes = useStyles();

    return (
        <div className='FullReview'>
            
            <Typography variant='h1' className={classes.title} color='primary'>
                Pryymak Sets New School Wins Mark as Summit Hockey Tops Morris Knolls, 6-2</Typography>
            {/* <img src="https://picsum.photos/315/200" alt="Lizard"/> */}
            <div className="review-details">
                <Avatar src='https://picsum.photos/100' className={classes.avatar} />
                <Typography variant='h3' color='primary' id='name'>
                    Josiah McClain <span>|</span>
                    </Typography>
                <div className="review-date">
                    <Typography variant='body1' color='secondary'>
                        May 13, 2021</Typography>
                </div>
            </div>

            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
            <Typography className={classes.header} color='primary' align='left'>More on Lizards</Typography>
            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
            <Typography className={classes.header} color='primary' align='left'>More on Lizards</Typography>
            <Typography variant='body1' align='left' className={classes.reviewBody}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles.
                </Typography>
        </div>
    );
}