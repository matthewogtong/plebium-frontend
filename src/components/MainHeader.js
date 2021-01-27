import React from "react";

import NavBar from "./NavBar";

function MainHeader({ currentUser }) {

//   function handleWriteStory() {
    

//   }

//   function handleViewProfile(id) {
   
//   }


    return (
      <div className="main-header">
          <h1 className="main-header-title">Plebium</h1>
          <h4 className="main-header-welcome">Welcome Back</h4>
          <h3 className="main-header-name">{currentUser.first_name} {currentUser.last_name}</h3>
        <NavBar />
      </div>
    );
        
}

export default MainHeader;