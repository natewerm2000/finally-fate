import React from "react";
import Navbar from "./page_components/VerticalNav.js"
import Time from "./page_components/Time.js";
export default function home(){
    return(
        <div >
            
            
            <Navbar li={[
        ["Home","/img/restaurant.svg" ],
        ["Shop", "/img/manage user.svg"],
        ["Contact", "/img/manage coupon.svg"],
      ]}
    />
    
    <Time />
    
        <p id='head1' class='header'>Finally Fate</p>
<p id='head2' class='header'>Finally here</p>
<p id='head3' class='header'>For you</p>
<p id='head4' class='header'>all of your needs</p>
<p id='head5' class='header'>beautifully crafted</p>
    
   
<button>Shop</button>
    <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
  
        </div>
    )
}