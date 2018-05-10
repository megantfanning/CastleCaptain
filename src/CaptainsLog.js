import React, { Component } from 'react';

// on button press take button label and create a entry to the log
function createLog(){
    const newEntry="";
    return newEntry;
}

//TODO li's probably need keys here?
function CaptainsLog(props){
    const intro =[ "Landed in Parnas to take on crew","Began Voyage, fair eastward winds",];
    const reverseChronLog = intro.concat(props.log)
    const log = reverseChronLog.reverse();
    const listItems = log.map((log) => <li>{log}</li>);

    return(
        <div>
        <ul>{listItems}</ul> <br/>
        </div>
    )
}

export {CaptainsLog};