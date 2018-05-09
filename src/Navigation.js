import React, { Component } from 'react';

function NavigationButton (props) {
    return(
        <div class="d-inline-block">
        <img src={props.img} className={props.navClass} alt={props.label} /> 
        <br/>
        <label>{props.label}</label>
        </div>
    )
}

export {NavigationButton};