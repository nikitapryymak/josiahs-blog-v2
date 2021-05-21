import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CreateReview.css';
import db, { timestamp } from '../firebase';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    textField: {
        marginBottom: '2rem',
        lineHeight: '25px'
    },
    fullReview: {
        marginBottom: '.75rem'
    },
    button: {
        marginTop: '2rem',
        width: '9rem',
        margin: '.5rem auto',
        color: '#25a6e9',
        borderColor: '#25a6e9',
    },
});

export default function CreateReview() {

    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [body, setBody] = useState('');
    const [snippet, setSnippet] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const docRef = await db.collection('reviews').add({
                title,
                date,
                timestamp: timestamp(),
                imageURL,
                snippet
            });
            await db.collection('reviews').doc(docRef.id).collection('fullReview').add({
                body
            });
            history.push('/');
        } catch (err) {
            alert("ERROR!", err.message);
        }
        setLoading(false);
    }

    return (
        <div className='CreateReview'>
            
            <Typography variant='h1' color='primary'>
                Create a Review
            </Typography>

            <form onSubmit={handleSubmit} className='review-form'>
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="Date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}/>
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="image URL"
                    required
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}/>
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="Snippet (172 characters)"
                    required
                    value={snippet}
                    onChange={e => setSnippet(e.target.value)}
                    multiline={true}
                    rows='2'
                    inputProps={{ maxLength: 172 }}/>
                <Typography variant='h3' className={classes.fullReview} color='primary'>Full Review</Typography>
                <CKEditor 
                    editor={ClassicEditor}
                    onChange={ (e, editor) => {
                        setBody(editor.getData());
                    }} />
                <Button 
                    type='submit' 
                    variant='outlined' 
                    className={classes.button}
                    size='large'
                    disabled={loading}
                >Submit
                </Button>
            </form>
        </div>
    )
}