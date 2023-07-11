import React, { useState } from 'react';
import { PRODUCTS } from '../shared/product';
import { useNavigate } from "react-router-dom";

export default function TableProduct() {
    const [products, setProducts] = useState(() => {
        const storageProducts = JSON.parse(localStorage.getItem('products'))
        return storageProducts ?? PRODUCTS
    })
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate("/");
    };

    const handleEdit = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleDelete = (productId) => {
        setProducts((products) => {
            const newProducts = products.filter((product) => product.id !== productId)
            // Save to local storage
            const jsonProduct = JSON.stringify(newProducts)
            localStorage.setItem('products', jsonProduct)
            return newProducts
        });

    };

    let listProduct = products.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <button className='mr-3' onClick={() => handleEdit(product.id)}>Edit</button>
                    <button className='mr-3' onClick={() => handleDetail(product.id)}>Detail</button>
                    <button className='mr-3' onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div className='d-flex justify-content-end pr-5'>
                <button className='' onClick={handleSignOut}>Sign Out</button>
            </div>
            <h2 className='text-center mb-5'>Manage Products</h2>
            <table className='table col-6 m-auto'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct}
                </tbody>
            </table>
        </div>
    )
}
