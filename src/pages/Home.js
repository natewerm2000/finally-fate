import React from "react";
import Navbar from "./page_components/VerticalNav.js"
import Time from "./page_components/Time.js";
export default function home(){
    return(
        <div >
            
            
            <Navbar li={[
        ["Dashboard", "img/dashboard.svg"],
        ["Brendan’s Victims", "img/restaurant.svg"],
        ["Brendan's Dick pics (all angles included)", "img/manage user.svg"],
        ["Brendan's favorite movie", "img/manage order.svg"],
        ["Brendan's penis stats", "img/manage coupon.svg"]
      ]}
    />
    <Time />
    
        </div>
    )
}