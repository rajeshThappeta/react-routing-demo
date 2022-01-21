import React from 'react';

function Product(props) {

    return (
        <div className='card card-body'>
            <h1>{props.children}</h1>
            <img src={props.productObj.productImage} alt="" />
            <h2>{props.productObj.productName}</h2>
        </div>
    )
}

export default Product;
