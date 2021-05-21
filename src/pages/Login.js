import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import './Login.css';

const useStyles = makeStyles({
    textField: {
        marginBottom: '1.25rem',
    },
    button: {
        color: '#25a6e9',
        borderColor: '#25a6e9',
        outline: 'none',
    }
});

export default function Login() {

    const classes = useStyles();
    const { login } = useContext(AuthContext)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/create');
        } catch (err) {
            alert(err.mesasge)
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit} className='review-form'>
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="Email"
                    type='email'
                    required
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <TextField
                    variant='outlined'
                    className={classes.textField}
                    label="Password"
                    type='password'
                    required
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <Button 
                        type='submit'
                        className={classes.button} 
                        variant='outlined'
                        color='secondary'
                        size='large'
                    >Login</Button>
            </form>
        </div>
    )
}