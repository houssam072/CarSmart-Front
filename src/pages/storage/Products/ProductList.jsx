// @ts-nocheck

import React , {useState, useEffect, useContext} from 'react';

import './productList.css'
// import Admin from '../sidebar/Admin';
import axios from 'axios';
import {User} from '../../auth/context'
import { Link } from 'react-router-dom';





export default function ProductList() {
  const [productList, setProduct] = useState([]);
  const context = useContext(User);
  const [successMessage, setSuccessMessage] = useState('');

  const token = context.token;

  useEffect( () => {
    axios.get('http://127.0.0.1:8000/product/productList/', { 
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },}

    )    .then(
            (data) => setProduct(data.data.product)
            )


  }, [])


// const deleteJob = async(id) => {
//   await axios.delete(`http://127.0.0.1:8001/job/api/delete_job/${id}/`, { 
//       headers:{
//         Accept: "application/json",
//         Authorization: "Bearer " + token,
//       },});

//   const newData = await axios.get('http://127.0.0.1:8001/job/api/list_job/', {
//     headers: {
//       Accept: 'application/json',
//       Authorization: 'Bearer ' + token,
//     },
//   });
//   setPost(newData.data);
//   setSuccessMessage('successfully delete jop.');



// }

  


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
                <h4>Color</h4>
                <h4>Ratio</h4>
                <h4>Quantity</h4>

              </li>
              {
                productList.map(post => (
                  <li key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.product_name}</p>
                    <p>{post.product_color}</p>
                    <p>{post.product_ratio}</p>
                    <p>{post.quantity}</p>            
                  </li>
                ))
              }
            </ul>
            <Link to='/addProduct' value="New Product" className="btn btn-primary btn-block">New Product </Link>
          </div>
        </div>

  )
}