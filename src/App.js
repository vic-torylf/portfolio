import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
    return (
        <Router>
            <Route path="/portfolio" component={Header} />  
            <Navbar />
            <Switch>
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
            
    )
}
