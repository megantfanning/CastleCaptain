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

// function NavigationBoard(){
//     onToggle(){return};
//         // if true animate
//         // if false show static
//     return()
// }

// class NavigationToggle extends React.Component (props) {
//     // constructor(props){
//     //     super(props);
//     //     setState(this.toggled=false)
//     // }

//     handleClick(){
//         if (this.props.disabled) { return; }
//         // this.setState(!!this.toggled);
//         //TODO push state of button to captains log
//         // this.props.onToggle(this.state.toggled)
//     }

//     render() {
//         return(
//             <NavigationButton {...this.props} />
//         )
//     }
// }


export {NavigationButton};