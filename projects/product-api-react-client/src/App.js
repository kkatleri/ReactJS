import './App.css';
import GetAllProducts from './GetAllProducts';
import GetProduct from './GetProduct';
import CreateProduct from './CreateProduct';
import DeleteProduct from './DeleteProduct'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<GetAllProducts />}></Route>
        <Route path="/CreateProduct" element={<CreateProduct />}></Route>
        <Route path="/GetProduct" element={<GetProduct />}></Route>
        <Route path="/DeleteProduct" element={<DeleteProduct />}></Route>
      </Routes>

      <Link to="/CreateProduct"> Add a product</Link> <br/>
      <Link to="/GetProduct"> Get product details</Link> <br/>
      <Link to="/DeleteProduct"> Delete a product</Link> <br/>
      
    </div>
  );
}

export default App;
