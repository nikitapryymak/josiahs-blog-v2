import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import './Contact.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    textField: {
        marginBottom: '2rem',
    },
    button: {
        width: '9rem',
        color: '#25a6e9',
        borderColor: '#25a6e9'
    },
    submitted: {
        marginTop: '5rem',
        width: '90%',
        margin: '0 auto'
    },
    circularProgress: {
        position: 'absolute',
        right: '-2.75rem',
        top: '.45rem'
    }
});


export default function Contact() {

    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await emailjs.sendForm('contact_test', 'contact_form', e.target, process.env.REACT_APP_EJS_UID);
            setSubmitted(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className='Contact'>

            <Typography variant='h1' color='primary' style={{ marginBottom: '1rem' }}>
                Contact Me</Typography>
            <Typography variant='h3' color='error'>
                I'd love to get in touch!</Typography>
            
            <form onSubmit={handleSubmit} className='contact-form' style={{ display: submitted ? 'none' : 'flex' }}>

                <div className="name">
                    <TextField
                        name='first_name'
                        color='secondary'
                        className={classes.textField}
                        label="First Name"
                        required
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <TextField
                        name='last_name'
                        className={classes.textField}
                        label="Last Name"
                        required
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                
                <TextField
                    name='user_email'
                    className={classes.textField}
                    label="Email"
                    type='email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    name='message'
                    className={classes.textField}
                    label="Message"
                    required
                    multiline
                    rows='8'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <div className="submit-btn-container">
                    <Button 
                        className={classes.button}
                        type='submit'
                        variant="outlined" 
                        size='large'
                        disabled={loading}
                    >Submit
                    </Button>
                    { loading && <CircularProgress className={classes.circularProgress} color="inherit" size='1.5rem' /> }
                </div>
            </form>
            { error && <p className='error'>Could not process request.</p> }

            { submitted && <Typography variant='h3' color='inherit' className={classes.submitted}>
                Thanks for contacting me. I will get back to you as soon as I can!
                </Typography> }
        </div>
    );
}