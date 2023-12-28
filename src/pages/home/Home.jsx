import React, { useContext, useState } from 'react';
import { User } from "../auth/context";
import { useNavigate } from "react-router-dom";

import Services from '../services/Services';
import axios from 'axios';





export default function Home() {
    const context = useContext(User);
    const nav = useNavigate();
    const token = context.token;

    const [services_section, set_services_section] = useState(false)
    const [order_title, setOrderTitle] = useState('')
    const [order_customer_name, setOrderCustomerName] = useState('')
    const [mobile_phone, setMobilePhone] = useState('')
    const [car_number, setCarNumber] = useState('')
    const [car_type, setCarType] = useState('')
    const [car_color, setCarColor] = useState('')
    const [car_models, setCarModels] = useState('')
    const [order_notess, setOrderNotes] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    // const ServiceSectionFlag = () => {
    // }

    async function Submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("order_title", order_title);
        formData.append("order_customers_name", order_customer_name);
        formData.append("mobile_phone", mobile_phone);
        formData.append("car_plate_number", car_number);
        formData.append("car_type", car_type);
        formData.append("car_models", car_models);
        formData.append("order_notes", order_notess);

        try{
            let res = await fetch(
                'http://127.0.0.1:8000/orders/orderList/',{
                    method: 'POST',
                    headers:{
                      Accept: "application/json",
                      Authorization: "Bearer" + token,
                    },      
                    body: formData,
                    });
                
            if (res.ok) {
                console.log(res);
                    setSuccessMessage('successfully application.');
                    // set_services_section(prevState => {
                    // return !prevState;
                    // });

                                    nav('/addServices')}

          
                
        }catch (error) {
          setSuccessMessage('failed application for jop try again.');
      }


    }


  return (
    <div>
        <div className="container">
            <div className="order_section">
                <div className="form-group mb-3">
                    <h1>new order</h1>
                </div>
                <form onSubmit={Submit}  method="post" className=''>
                    <div className="form_input d-flex justify-content-between flex-wrap ">
                    <div className="form-group m-3 w-25">
                        <label htmlFor="order_title">Order Title:</label>
                        <input  className='form-control' type="text" name='order_title' value={order_title} onChange={(e) => setOrderTitle(e.target.value)}  placeholder='Enter Order Title ...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="order_customer_name">Order customers name:</label>
                        <input  className='form-control' type="text" name='order_customer_name' value={order_customer_name} onChange={(e) => setOrderCustomerName(e.target.value)}  placeholder='Enter Order customers name...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="mobile_phone">Mobile phone:</label>
                        <input  className='form-control' type="number" name='mobile_phone' value={mobile_phone} onChange={(e) => setMobilePhone(e.target.value)} placeholder='Enter Mobile phone...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="car_number">Car plate number:</label>
                        <input  className='form-control' type="number" name='car_number' value={car_number} onChange={(e) => setCarNumber(e.target.value)} placeholder='Enter Car plate number...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="car_type">Car type:</label>
                        <input  className='form-control' type="text" name='car_type' value={car_type} onChange={(e) => setCarType(e.target.value)}  placeholder='Enter Car type...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="car_color">Car color:</label>
                        <input  className='form-control' type="text" name='car_color' value={car_color} onChange={(e) => setCarColor(e.target.value)}  placeholder='Enter Car type...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="car_models">Car models:</label>
                        <input  className='form-control' type="text"  name='car_models' value={car_models} onChange={(e) => setCarModels(e.target.value)}  placeholder='Enter Car models...' />
                    </div>
                    <div className="form-group m-3 w-25">
                        <label htmlFor="order_notess">Order notes:</label>
                        <input  className='form-control' type="text"  name='order_notess' value={order_notess} onChange={(e) => setOrderNotes(e.target.value)}   placeholder='Enter Order notes...' />
                    </div>
                    </div>
                    <div className="form-group m-3">
                        <input type='Submit' value="Add" className="btn btn-primary btn-block"/>
                    </div>
                </form>
            </div>

            
            {/* <div className="service_section">
                    {services_section && <Services mobile_phone = {mobile_phone}/>}
            </div> */}

        </div>
    </div>
  )
}