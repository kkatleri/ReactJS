import {useEffect, useState} from "react"
import axios from "axios"

function GetAllProducts() {

  const [products, setProducts] = useState([]);

  const getProducts = ()=>{
    axios.get("http://localhost:8090/api/products")
      .then(res=>{
        console.log(res.data);
        setProducts(res.data)
      })
      .catch(err=>console.error(err))
      console.log("Products - " + products);
  };

  useEffect(()=> getProducts(),[]);

  var tableStyle = {
    border: "1px solid black",
    width: "40%",
    backgroundColor: "blanchedalmond",
    borderCollapse: "collapse"
  };

  var thStyle = {
    border: "1px solid black",
    height: "35px"
  };

  var tdStyle = {
    border: "1px solid black",
    textAlign: "center",
    height: "20px"
  };

  return (
    <div>
      <br/>
      <button onClick={getProducts}>Get All Products</button>
      <br/><br/>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
          <tr>
            <td style={tdStyle}>{product.id}</td>
            <td style={tdStyle}>{product.name}</td>
            <td style={tdStyle}>{product.description}</td>
            <td style={tdStyle}>{product.price}</td>
          </tr>)}
        </tbody>
      </table>
      <br/>
    </div>
  );
}

export default GetAllProducts;
