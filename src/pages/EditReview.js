import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import './CreateReview.css';
import db from '../firebase';
import { useHistory, useParams } from 'react-router';

const useStyles = makeStyles({
    button: {
        marginTop: '2rem',
        width: '9rem',
        margin: '.5rem auto',
        color: '#25a6e9',
        borderColor: '#25a6e9',
    },
});

export default function EditReview() {

    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    const [body, setBody] = useState(null);
    const [updateDoc, setUpdateDoc] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log();

    useEffect(() => {
        async function fetchBody() {
            const snap = await db.collection('reviews').doc(id).collection('fullReview').get();
            setUpdateDoc(snap.docs[0].id);
            setBody(snap.docs[0].data().body);
            setLoading(false);
        }
        fetchBody();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await db.collection('reviews').doc(id).collection('fullReview').doc(updateDoc).update({
                body
            });
            history.push('/');
        } catch (err) {
            alert("ERROR!", err.message);
        }
        setLoading(false);
    }

    return !loading ? (
        <div className='CreateReview'>
            
            <Typography variant='h1' color='primary'>
                Edit Review
            </Typography>

            <form onSubmit={handleSubmit} className='review-form'>
                <CKEditor 
                    data={body}
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
    ) : <p>Loading ...</p>
}