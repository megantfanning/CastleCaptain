import React, { Component } from 'react';

function NavigationButton (props) {
    return(
        <div class="d-inline-block">
            <img src={props.img} className={props.navAnimation} alt={props.label} /> 
            <br/>
            <label>{props.label}</label>
        </div>
    )
}
// TODO if no navAnimation Provided use icon
function NavigationToggle (props) {
    return(
        <div class="d-block mx-auto">
            <img src={props.img} className={props.navAnimation1} alt={props.label1} /> 
            <br/>
            <label>{props.label1}</label>
            <br/>
            <img src={props.img} className={props.navAnimation2} alt={props.label2} /> 
            <br/>
            <label>{props.label2}</label>
        </div>
    )
}

export {NavigationButton, NavigationToggle};