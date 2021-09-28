import React from 'react'

function StoreItem({image, name, price}) {
    return (
        <div className="storeItem">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>${price}/-</p>
            
        </div>
    )
}

export default StoreItem
