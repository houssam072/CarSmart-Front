import React, { useContext, useState } from 'react'
import { User } from "../auth/context";
import { useNavigate , Link} from "react-router-dom";






export default function Services() {
    const nav = useNavigate();
    const context = useContext(User);
    const token = context.token;

    const [order, setOrder] = useState('')
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('')
    const [order_part, setOrderPart] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    
    async function Submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product", product);
        formData.append("quantity_sold", quantity);
        formData.append("order_part", order_part);


        try{
            let res = await fetch(
                `http://127.0.0.1:8000/orders/servicesList/add/${order}/`,{
                    method: 'POST',
                    headers:{
                      Accept: "application/json",
                      Authorization: "Bearer" + token,
                    },      
                    body: formData,
                    });
                    if (res.ok) {
                    setSuccessMessage('successfully application.');

                        console.log(res);
                    nav('/')}
        }catch (error) {
          setSuccessMessage('failed application for jop try again.');
      }}

  return (
    <div>
        <div className="container">
                <form  method="post" className="form_input d-flex justify-content-between flex-wrap" onSubmit={Submit}>
                       
                        <div className="form-group m-3 w-25">
                            <label htmlFor="password">order:</label>
                            <input  className='form-control' type="text" name='order' value={order} onChange={(e) => setOrder(e.target.value)}  placeholder='Enter Order customers name...' />
                        </div>
                       
                        <div className="form-group m-3 w-25">
                            <label htmlFor="password">Product:</label>
                            <input  className='form-control' type="text" name='product' value={product} onChange={(e) => setProduct(e.target.value)}  placeholder='Enter Order customers name...' />
                        </div>
                        <div className="form-group m-3 w-25">
                            <label htmlFor="password">Quantity Sold:</label>
                            <input  className='form-control' type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Enter Mobile phone...' />
                        </div>
                        <div className="form-group m-3 w-25">
                            <label htmlFor="password">Order part:</label>
                            <input  className='form-control' type="text" name='order_part' value={order_part} onChange={(e) => setOrderPart(e.target.value)} placeholder='Enter Car plate number...' />
                        </div>
                        <div className="form-group m-3 w-25" style={{ textAlign: "center" }}>
                            <input type="submit" value="Save" className="btn btn-primary btn-block w-50"/>
                        </div>
                </form>
            </div>
        </div>
  )
}