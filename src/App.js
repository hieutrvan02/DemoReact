import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './components/LoginComponent';
import TableProduct from './components/ManageProduct';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/manageproduct" Component={TableProduct} />
          <Route exact path="/product/:productId" Component={ProductDetail} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
