import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px', padding: '10px', borderBottom: '1px solid #ccc' }}>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/sellers">Sellers</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
