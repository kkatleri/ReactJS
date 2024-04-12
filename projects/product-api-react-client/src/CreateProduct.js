import {useState} from "react"
import axios from "axios"

function CreateProduct() {

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const createProduct = ()=>{
    
    console.log("User input - " + id, name, description, price);
  
    axios.post("http://localhost:8090/api/products/", 
        {
          'id':id,
          'name':name,
          'description':description,
          'price':price
        })
      .then(res=>{ console.log(res.data);  })
      .catch(err=>console.error(err))
  };

  return (
    <div>
      <h2> Add Product </h2>
      Enter product id :<input onChange={e=>setId(e.target.value)} /> <br/>
      Enter product Name : <input onChange={e=>setName(e.target.value)} /> <br/>
      Enter product Description : <input onChange={e=>setDescription(e.target.value)} /> <br/>
      Enter product Price : <input onChange={e=>setPrice(e.target.value)} /> <br/>
      <button onClick={createProduct}>Add product</button>
    </div>
  );
}

export default CreateProduct;
