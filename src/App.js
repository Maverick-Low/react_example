import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'

const App = () => {
    return (
        <div className= 'App'>
            <Router>
                <Navbar/>
                <Routes path = '/' exact />
            </Router>
            
        </div>
    )
}

export default App