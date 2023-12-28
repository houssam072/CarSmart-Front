import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../auth/context";


import './addProduct.css';

export default function AddProduct() {
  const context = useContext(User);
  const token = context.token;
  const [product_name, setProductName] = useState("");
  const [product_color, setProductColor] = useState("");
  const [product_ratio, setProductRatio] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("id", '2');
    formData.append("product_name", product_name);
    formData.append("product_color", product_color);
    formData.append("product_ratio", product_ratio);
    formData.append("quantity", '0');



    try { 
      await axios.post("http://127.0.0.1:8000/product/productList/",
        formData,
        { 
        headers:{
          Accept: "application/json",
          Authorization: "Bearer" + token,
        },
      }
      );
        setSuccessMessage('successfully added product.');
    } catch (error) {        
      setSuccessMessage('failed added product try again.');

    }
  };

  return (
        <div className="register">
          <div className="container ">
          {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
          {errorMessage && <div style={{ color: 'blue' }}>{errorMessage}</div>}

            <h1 className="title">New Job</h1>
            <form onSubmit={handleSubmit} action="" className="form_input d-flex justify-content-between flex-wrap ">
              <div className="form-group m-3 w-25">
                  <label  htmlFor="title">Product name:</label>
                  <input className='form-control'
                    type="text"
                    placeholder="Enter Product name please"
                    name="product_name"
                    id="product_name"
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                  />
              </div>

              <div className="form-group m-3 w-25">
                  <label htmlFor="department">Product color:</label>
                  <input className='form-control'
                    type="text"
                    placeholder="Enter Product color please"
                    name="product_color"
                    id="product_color"
                    value={product_color}
                    onChange={(e) => setProductColor(e.target.value)}
                  />
              </div>

              <div className="form-group m-3 w-25">

                  <label htmlFor="department">Product ratio:</label>
                  <input className='form-control'
                    type="number"
                    placeholder="Enter Product ratio please"
                    name="product_ratio"
                    id="product_ratio"
                    value={product_ratio}
                    onChange={(e) => setProductRatio(e.target.value)}
                  />
              </div>

              <div  className="form-group m-3 w-25" style={{ textAlign: "center" }}>
                <button  className="btn btn-primary btn-block w-75" id="submit" type="submit">Add</button>
              </div>
            </form>

          </div>
        </div>
  );
}