import "./Header.scss";
import {TbSearch} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgShoppingCart} from 'react-icons/cg';
import { useContext, useEffect, useState } from "react";
import Search from './Search/Search';
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Utils/Context";
const Header = () => {
  const {cartCount}=useContext(Context)
  const [scrolled,setScrolled]=useState(false);
  const [ShowCart,setShowCart]=useState(false);
  const [ShowSearch,setShowSearch]=useState(false);

  const navigate=useNavigate();
const handleScroll=()=>{
  const offset=window.scrollY;
 if(offset>200){
  setScrolled(true);
 }
  else{
    setScrolled(false);
  
 }
}
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
  })
    return(
      <>  
    
         <header className={`main-header ${scrolled? 'sticky-header' : ' ' }`}>
 <div className="header-section">
  <ul className="left">
    <li onClick={()=>navigate('/')}>Home</li>
    <li>About</li>
    <li>Categories</li>
  </ul>
  <div className="center"  onClick={()=>navigate('/') }>JSDevStore.</div>
  <div className="right">
    <TbSearch onClick={()=>{setShowSearch(true)}}/>
    <AiOutlineHeart/>
    <span className="cart-icon" onClick={()=>{setShowCart(true)}}>
    <CgShoppingCart/>{!!cartCount && <span> {cartCount}</span>}
    </span>
  </div>
  </div>
    </header>
    {ShowCart && <Cart setShowCart={setShowCart}/>}
    { ShowSearch && < Search setShowSearch={setShowSearch}/>}
     </>
    );
};

export default Header;
