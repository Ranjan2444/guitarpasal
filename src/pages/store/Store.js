import React from 'react'
import './store.css'
import {StoreList} from '../../components/menulist/StoreList'
import StoreItem from '../../components/storeitem/StoreItem'

function Store() {
    return (
        <div className="store">
            <h1 className="storeTitle">Our Store</h1>
            <div className="storeList">
                {StoreList.map((storeItem, key)=>{
                    return <StoreItem key={key} image={storeItem.image} name={storeItem.name} price={storeItem.price}/>
                })}
            </div>
        </div>
    )
}

export default Store
