import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import Sellers from './pages/Sellers';
import Users from './pages/Users';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/sellers" element={<Sellers />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default App;
