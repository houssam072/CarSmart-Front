// @ts-nocheck

import React , {useState, useEffect, useContext} from 'react';

import './purchaseslist.css'
// import Admin from '../sidebar/Admin';
import axios from 'axios';
import {User} from '../../auth/context'
import { Link } from 'react-router-dom';





export default function PurchasesList() {
  const [purchasList, setPurchases] = useState([]);
  const context = useContext(User);
  const [successMessage, setSuccessMessage] = useState('');

  const token = context.token;

  useEffect( () => {
    axios.get('http://127.0.0.1:8000/storage/PurchasesList/', { 
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },}

    )    .then(
            (data) => setPurchases(data.data.purchases)
            )


  }, [])

  


  return (


        <div className='home'>
          <div className="container">
            <div className="title">
            {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}

              <h2>Products</h2>
            </div>
            <ul className='job_list'>
              <li>
                <h4>id</h4>
                <h4>Product</h4>
                <h4>Quant</h4>
                <h4>price</h4>
                <h4>Date</h4>

              </li>
              {
                purchasList.map(post => (
                  <li key={post.id}>
                    <p>{post.purchase_id}</p>
                    <p>{post.product_name}</p>
                    <p>{post.quantity_purchased}</p>
                    <p>{post.product_unit_price}</p>
                    <p>{post.created_at}</p>            
                  </li>
                ))
              }
            </ul>
            <Link to='/addPurchases' value="New Purchas" className="btn btn-primary btn-block">New Purchas </Link>
          </div>
        </div>

  )
}