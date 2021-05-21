import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import EditIcon from '@material-ui/icons/Edit';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import db from "../firebase";
import ReactHtmlParser from 'react-html-parser';
import logo from '../img/logo.JPG';
import { AuthContext } from "../contexts/AuthContext";
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

export default function FullReview() {

    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [body, setBody] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDetails() {
            const doc = await db.collection('reviews').doc(id).get();
            setDetails({ ...doc.data() })
        }
        fetchDetails();
    }, [id]);

    useEffect(() => {
        async function fetchBody() {
            const snap = await db.collection('reviews').doc(id).collection('fullReview').get();
            setBody(snap.docs[0].data().body);
            setLoading(false);
        }
        fetchBody();
    }, [id]);

    return !loading ? ( 
        <div className='FullReview'>
            
            <Typography variant='h1' className={classes.title} color='primary'>
                { details?.title }</Typography>
            <div className="full-review-img" style={{ backgroundImage: `url(${details?.imageURL})` }} />
            <div className="review-details">
                <Avatar src={logo} className={classes.avatar} />
                <Typography variant='h3' color='primary' id='name'>
                    Josiah McClain <span>|</span>
                    </Typography>
                <div className="review-date">
                    <Typography variant='body1' color='secondary'>
                        {details?.date}</Typography>
                </div>
            </div>
            <div id="full-body">
                {/* p and h1/h2/h3 */}
                { currentUser && <Link to={`/edit/${id}`} className='edit-review-btn'>
                <EditIcon color='error' /></Link> }
                { body && ReactHtmlParser(body) }
            </div>
        </div>
    ) : ''
}