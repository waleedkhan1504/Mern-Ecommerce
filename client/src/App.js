import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
//import AppContext from "./Utils/Context";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from './components/SingleProduct/SingleProduct';
import AppContext from "./Utils/Context";
const App = () => {
  return (
  
      
     
     <BrowserRouter>
     <AppContext> 
     <Header/>
     <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/category/:id' element={<Category/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
     </Routes>
     </AppContext>
     </BrowserRouter>
    
  )
}

export default App

