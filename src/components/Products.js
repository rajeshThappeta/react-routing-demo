import React from 'react';
import Product from './Product';
function Products() {

    let productsList = [
        {
            productName: "Cat-1",
            productImage: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April/Cat_Dry_Food.jpg"
        },
        {
            productName: "Cat-2",
            productImage: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April/Cat_Wet_Food.jpg"
        }
    ]

    return (
        <div className='text-center'>
            <p className="display-2 text-info">Products</p>
            <hr />
            <div className="d-flex container">
                {/* {
                    productsList.map((productObj, index) => <Product key={index} productObj={productObj}>
                        <span>This is new data</span>
                    </Product>)
                } */}

                <Product productObj={productsList[0]} >
                    <span>Top picks for your home</span>
                </Product>

                <Product productObj={productsList[1]}>
                    <span>Shop by Category</span>
                </Product>
            </div>
        </div>
    )
}

export default Products;
