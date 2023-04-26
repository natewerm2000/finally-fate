import React from "react";
import Navbar from "./page_components/VerticalNav.js"
import Time from "./page_components/Time.js";
export default function home(){
    return(
        <div >
            
            
            <Navbar li={[
        ["Dashboard", ""],
        ["Brendan’s Victims", ""],
        ["Brendan's Dick pics", ""],
        ["Brendan's N pass ", ""],
        ["Brendan's penis stats", ""]
      ]}
    />
    
    <Time />
    <div className="intro">
        <p id='head1' class='header'>Finally Fate</p>
<p id='head2' class='header'>Finally here</p>
<p id='head3' class='header'>For you</p>
<p id='head4' class='header'>all of your needs</p>
<p id='head5' class='header'>beautifully crafted</p>
    </div>
   
<button>Continue</button>
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