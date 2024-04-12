import {useState} from "react"
import axios from "axios"

function DeleteProduct() {

  const [id, setId] = useState(0);

  const deleteProduct = ()=>{
    axios.delete("http://localhost:8090/api/products/" + id)
      .then(res=> console.log(res.data))
      .catch(err=>console.error(err))
  };

  return (
    <div>
      <h2> Delete Product : </h2>
      Enter product id : <input onChange={e=>setId(e.target.value)} />
      <button onClick={deleteProduct}>Delete Product</button>
    </div>
  );
}

export default DeleteProduct;
