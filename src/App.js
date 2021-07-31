import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react';
import { EmployeeList } from './MyComponents/EmployeeList';
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader'
import { Route } from 'react-router-dom';
import { Welcome } from './Pages/Welcome'
import { Product } from './Pages/Product'
import { ProductDetail } from './Pages/ProductDetail'

//add validation...

function App() {

    return (

        <div className="container">

            <MainHeader />
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/product">
                <Product />
            </Route>
            <Route path="/product-detail/:productId/:productName">
                <ProductDetail />
            </Route>

        </div>

    )
}

export default App;
