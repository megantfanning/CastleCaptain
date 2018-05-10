import React, { Component } from 'react';

function NavigationButton (props) {
    return(
        <div>
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
            <NavigationButton img={props.img} navAnimation={props.navAnimation1} alt={props.label1} label={props.label1}/>
            <br/>
            <NavigationButton img={props.img} navAnimation={props.navAnimation2} alt={props.label2} label={props.label2}/>
        </div>
    )
}

// class Navigation(){
//     constructor(props){
//         super(props)
//     }

//     handleClick(idx){
//         label
//     }

//     render(
//         <div class="d-flex m-50 align:center">
//         <NavigationToggle navAnimation1="spin" label1="Spin" img={logo} navAnimation2="widdershins" label2="Widdershins"/>
//         <NavigationToggle navAnimation1="riseIcon" label1="Rise" img={logo} navAnimation2="sinkIcon" label2="Sink"/>
//         <NavigationToggle navAnimation1="icon" label1="North" img={logo} navAnimation2="icon" label2="South"/>
//         <NavigationToggle navAnimation1="icon" label1="East" img={logo} navAnimation2="icon" label2="West"/>
//         <NavigationToggle navAnimation1="icon" label1="Anchor" img={logo} navAnimation2="driftIcon" label2="Drift"/>
//         </div>
//     )
// }


export {NavigationButton, NavigationToggle};