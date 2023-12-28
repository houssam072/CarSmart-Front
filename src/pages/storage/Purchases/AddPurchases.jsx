import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../auth/context";



export default function AddPurchases() {
  const context = useContext(User);
  const token = context.token;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [product, setProduct] = useState("");
  const [product_name, setProductName] = useState("");
  const [quantity_purchased, setProductQuant] = useState("");
  const [product_unit_price, setProductPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("product", product);
    formData.append("product_name", product_name);
    formData.append("quantity_purchased", quantity_purchased);
    formData.append("product_unit_price", product_unit_price);



    try { 
      await axios.post("http://127.0.0.1:8000/storage/PurchasesList/",
        formData,
        { 
        headers:{
          Accept: "application/json",
          Authorization: "Bearer" + token,
        },
      }
      );
        setSuccessMessage('successfully added purchas.');
    } catch (error) {        
      setSuccessMessage('failed added purchas try again.');

    }
  };

  return (
        <div className="register">
          <div className="container ">
          {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
          {errorMessage && <div style={{ color: 'blue' }}>{errorMessage}</div>}

            <h1 className="title">New Purchases</h1>
            <form onSubmit={handleSubmit} action="" className="form_input d-flex justify-content-between flex-wrap ">
              <div className="form-group m-3 w-25">
                  <label  htmlFor="title">Product :</label>
                  <input className='form-control'
                    type="text"
                    placeholder="Enter Product name please"
                    name="product"
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  />
              </div>

              <div className="form-group m-3 w-25">
                  <label htmlFor="department">Product name:</label>
                  <input className='form-control'
                    type="text"
                    placeholder="Enter Product color please"
                    name="product_name"
                    id="product_name"
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                  />
              </div>

              <div className="form-group m-3 w-25">

                  <label htmlFor="department">Product Quantity:</label>
                  <input className='form-control'
                    type="number"
                    placeholder="Enter Product ratio please"
                    name="quantity_purchased"
                    id="quantity_purchased"
                    value={quantity_purchased}
                    onChange={(e) => setProductQuant(e.target.value)}
                  />
              </div>

                <div className="form-group m-3 w-25">

                    <label htmlFor="department">Product Price:</label>
                    <input className='form-control'
                    type="number"
                    placeholder="Enter Product ratio please"
                    name="product_unit_price"
                    id="product_unit_price"
                    value={product_unit_price}
                    onChange={(e) => setProductPrice(e.target.value)}
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