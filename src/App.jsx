import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header component/Header';
import HomePage from './components/pages/home/HomePage';
import Shop from './components/pages/shop/Shop';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
}

export default App;
