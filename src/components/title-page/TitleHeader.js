import React from "react";

//thinking we can find minimal icons to use for the buttons?
function TitleHeader() {

    return (
        <div className="title-header">
            <img className="logo"></img>
            <h2 className="title-name">Plebium</h2>
            <button className="sign-in">Sign In</button>
            <button className="get-started">Get Started</button>
        </div>
    )

}

export default TitleHeader;