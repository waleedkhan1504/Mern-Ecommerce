import "./Home.scss";
import Banner from './Banner/Banner';
import Newsletter from "../Footer/Newsletter/Newsletter";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../Utils/api";
import  { Context } from "../../Utils/Context";
//import Footer from "../Footer/Footer";

const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(Context);

  useEffect(()=>{
    getCategories();
    getProducts();
    // eslint-disable-next-line
  },[])
    
    const  getCategories=()=>{
      fetchDataFromApi('/api/categories?populate=*').then((response)=>{ 
        console.log(response);
        setCategories(response);
    })
    }
    const  getProducts=()=>{
        fetchDataFromApi('/api/products?populate=*').then((response)=>{ 
          console.log(response);
          setProducts(response);
      })
    
    }
    return (
      <> 
    <div >
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories}/>
                <Products products={products} headingText='Popular Products'/>
            </div>
        </div>
        <Newsletter/>
        
        </div>
        </>
        );
};

export default Home;

