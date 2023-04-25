import React from "react";
import Navbar from "./page_components/VerticalNav.js"
import Time from "./page_components/Time.js";
export default function home(){
    return(
        <div >
            
            
            <Navbar li={[
        ["Dashboard", "img/dashboard.svg"],
        ["Brendan’s Victims", ""],
        ["Brendan's Dick pics", ""],
        ["Brendan's N pass ", ""],
        ["Brendan's penis stats", ""]
      ]}
    />
    <Time />
    
        </div>
    )
}