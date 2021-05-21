import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './ReivewCardSty';
import logo from '../img/logo.JPG';
import { useHistory } from 'react-router';

export default function ReviewCard({ review }) {

    const { imageURL, title, date, snippet } = review;
    const classes = useStyles();
    const history = useHistory();

    function handleClick() {
        history.push(`/review/${review.id}`)
    }

    return (
        <Card onClick={handleClick} className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imageURL}
                />
                <CardContent className={classes.topCard}>
                    <Typography gutterBottom variant="h2">
                        {title}</Typography>
                        
                    <Typography variant='caption' color='secondary'>
                        {date}</Typography>

                    <Typography variant="body2" className={classes.mt} color="secondary" >
                        {snippet}...</Typography>      
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottomCard}>
                <div className={classes.author}>
                    <Avatar 
                        className={classes.avatar}
                        src={logo}
                    />
                    <Typography variant='subtitle1' color='primary'>
                        Josiah McClain
                        </Typography>
                </div>
                <Button className={classes.button} >
                    Full Review
                    </Button>
            </CardActions>
        </Card>
    );
}
