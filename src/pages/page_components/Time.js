import React from "react";
var time = new Date().toLocaleTimeString('en-US', { 
    day: "numeric",
    month: "numeric",
    year: "numeric", 
    hour: "numeric", 
    minute: "numeric"});
export default function Time(){
    return(

        
<div className="time">
    {time}
</div>
        

    )
}