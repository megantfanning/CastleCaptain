import React, { Component } from 'react';
import {CaptainsLog} from './CaptainsLog';
import logo from './logo.svg';
import './App.css';

function NavigationButton (props) {
    return(
        <div onClick={props.onClick} >
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
            <NavigationButton onClick={props.onClick} img={props.img} navAnimation={props.navAnimation1} alt={props.label1} label={props.label1}/>
            <br/>
            <NavigationButton onClick={props.onClick} img={props.img} navAnimation={props.navAnimation2} alt={props.label2} label={props.label2}/>
        </div>
    )
}

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick= this.handleClick.bind(this);
    }

    // TODO set up props array for switchboard
    // propsArr =[
    //     onClick={this:onClick},
    //     img={logo},
    //     navAnimation={navAnimation},
    //     alt={label},
    //     label={label}
    // ];

    handleClick(){
        console.log(`clicked ${this.props.label}`)
        CaptainsLog.logEntry("hello");
        //handle state or something here
    };

    render(){
        return(
            <div class="d-flex m-50 align:center">
            <NavigationButton onClick={this.handleClick} img={logo} navAnimation={"icon"} alt={"test"} label={"test"}/>
            <br/>
            <NavigationButton onClick={this.handleClick} img={logo} navAnimation={"icon"} alt={"test"} label={"best"}/>
            </div>
            // <div class="d-flex m-50 align:center">
            // <NavigationToggle onClick={this.onClick} navAnimation1="spin" label1="Spin" img={logo} navAnimation2="widdershins" label2="Widdershins"/>
            // <NavigationToggle onClick={this.onClick} navAnimation1="riseIcon" label1="Rise" img={logo} navAnimation2="sinkIcon" label2="Sink"/>
            // <NavigationToggle onClick={this.onClick} navAnimation1="icon" label1="North" img={logo} navAnimation2="icon" label2="South"/>
            // <NavigationToggle onClick={this.onClick} navAnimation1="icon" label1="East" img={logo} navAnimation2="icon" label2="West"/>
            // <NavigationToggle onClick={this.onClick} navAnimation1="icon" label1="Anchor" img={logo} navAnimation2="driftIcon" label2="Drift"/>
            // </div>
        );
    }
}

export {NavigationButton, NavigationToggle, Navigation}
