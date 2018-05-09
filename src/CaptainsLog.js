import React, { Component } from 'react';

// NOTE add new items to front rather than end
function CaptainsLog(props){
    const intro =[ "Took on Crew at Parnas","Begin Voyage, fair eastward winds",];
    // const test =["Full moon and thunder tonight", "Lizard worshipers unhappy"];
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