import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from '../shared/product';

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(() => {
        const storageProducts = JSON.parse(localStorage.getItem('products'))
        const products = storageProducts || PRODUCTS
        return products.find(product => product.id == productId)
    });
    const navigate = useNavigate();

    const handleUpdate = () => {
        const storageProducts = JSON.parse(localStorage.getItem('products'))
        const products = storageProducts || PRODUCTS
        const index = products.findIndex(product => product.id == productId)
        products.splice(index, 1, product)
        const jsonProduct = JSON.stringify(products)
        localStorage.setItem('products', jsonProduct)
        navigate("/manageproduct");
    };

    const handleClose = () => {
        navigate("/manageproduct");
    };

    return (
        <div>
            <h2 className="text-center mb-3 mt-3">Product Detail</h2>
            <table className="m-auto">
                <tr>
                    <td>ID: </td>
                    <td>
                        {product.id}
                    </td>
                </tr>
                <tr>
                    <td>Name: </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Name"
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Price: </td>
                    <td>
                        <input
                            type="number"
                            placeholder="Price"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={handleUpdate}>Update</button>
                    </td>
                    <td>
                        <button onClick={handleClose}>Close</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}