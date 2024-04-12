import {useState} from "react"
import axios from "axios"

function GetProduct() {

  const [product, setProduct] = useState({});
  const [id, setId] = useState(0);

  const getProduct = ()=>{
    axios.get("http://localhost:8090/api/products/" + id)
      .then(res=>{
        console.log(res.data);
        setProduct(res.data[0])
      })
      .catch(err=>console.error(err))
  };

  return (
    <div>
      <h2> Product Search : </h2>
      Enter product id : <input onChange={e=>setId(e.target.value)} />
      <button onClick={getProduct}>Get Product</button>
      <br/> <h3> Product Details : </h3>
      Name : {product.name} <br/>
      Description : {product.description} <br/>
      Price : {product.price}
    </div>
  );
}

export default GetProduct;
