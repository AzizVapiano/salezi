import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchData('products');
            setProducts(data?.data || []);
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.attributes.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
