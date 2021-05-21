import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FullReview from "./pages/FullReview";
import CreateReview from "./pages/CreateReview";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Footer from './components/Footer';
import "./index.css";
import EditReview from './pages/EditReview';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e2e2e'
    },
    secondary: {
      main: '#5d5d5d'
    },
    error: {
      main: '#25a6e9'
    }
  },
  typography: {
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 300
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <div className="App">
            <Nav />
                <Switch>
                  <Route exact path="/">
                    <Home /></Route>

                  <Route path="/about">
                    <About /></Route>

                  <Route path="/contact">
                    <Contact /></Route>

                  <Route path="/login">
                    <Login /></Route>

                  <Route exact path="/review/:id">
                    <FullReview /></Route>

                  <PrivateRoute path="/create">
                    <CreateReview /></PrivateRoute>
                  <PrivateRoute exact path="/edit/:id">
                    <EditReview /></PrivateRoute>

                </Switch>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;