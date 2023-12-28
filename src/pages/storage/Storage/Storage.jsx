import React, { useState } from 'react'
import './storage.css'
import { Link } from 'react-router-dom'
import ProductList from '../Products/ProductList'
import PurchasesList from '../Purchases/PurchasesList'

export default function Storage() {
    const [product_list, set_product_list] = useState(false)
    const [purchases_list, set_purchases_list] = useState(false)

    const ListJopFlag = () => {
        set_product_list(prevState => {
            set_purchases_list(false)
            return !prevState;
        });}
    const ListPurchasFlag = () => {
        set_purchases_list(prevState => {
            set_product_list(false)
            return !prevState;
        });}



  return (
    <div className="admin_page">

        <div className="container">
            <div className="admin_content">
                <div className="side_bar">
                    <ul>
                        <li id='admin_list_jop' onClick={ListJopFlag} >Products</li>
                        <li id='admin_list_jop_app' onClick={ListPurchasFlag}>Purchases</li>
                        <li id='admin_add_job'>Services</li>
                        {/* <li id='admin_add_job' onClick={ListJopFlag}>Add Job</li> */}
                    </ul>
                </div>

                <div className="main_page">
                     {product_list && <ProductList />}
                     {purchases_list && <PurchasesList />}
                    
                </div>
            </div>
        </div>
    </div>
  )
}