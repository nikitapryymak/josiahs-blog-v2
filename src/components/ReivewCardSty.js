import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    margin: {
        margin: '1rem 1.75rem'
    },
    card: {
      width: 330,
      height: 'fit-content',
      margin: '1.5rem 1.5rem',
      boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'
    },
    media: {
      height: 200,
    },
    mt: {
        marginTop: '.65rem'
    },
    topCard: {
        textAlign: 'left'
    },
    bottomCard: {
        padding: '.75rem 1rem',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    author: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: 35,
        height: 35,
        marginRight: '.5rem'
    },
    button: {
        color: '#25a6e9'
    }
});
export default useStyles;