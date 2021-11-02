import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/portfolio" component={Header} />  
                    <Route path="/work" component={Work} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </ScrollToTop>
        </Router>
            
    )
}
