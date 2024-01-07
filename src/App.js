import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';

const App = () => {
    return (
        <div className= 'App'>
            <Router>
                <Navbar/>
                <Routes>
                    {/* <Route path = '/' exact component = {Home} /> */}
                    <Route path='/' exact element={ <Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App