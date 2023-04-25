import React from "react";
import Navbar from "./page_components/VerticalNav.js"
export default function home(){
    return(
        <div >
            <Navbar li={[
        ["Dashboard", "img/dashboard.svg"],
        ["Restautant’s", "img/restaurant.svg"],
        ["Manage User’s", "img/manage user.svg"],
        ["Manage Order’s", "img/manage order.svg"],
        ["Manage Coupon’s", "img/manage coupon.svg"]
      ]}
    />
        </div>
    )
}