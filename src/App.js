import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/portfolio"component={Header} />  
                <Route exact path="/work"component={Work} />
                <Route exact path="/contact"component={Contact} />
            </Switch>
            <Footer />
        </Router>
            
    )
}
