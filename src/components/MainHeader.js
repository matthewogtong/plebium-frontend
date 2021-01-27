import React from "react";

import NavBar from "./NavBar";
import { useSpring, animated } from "react-spring"
function MainHeader({ currentUser }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

    return (
      <div className="main-header">
          <animated.h1 style={props} className="main-header-title">Plebium</animated.h1>
          <animated.h4 style={props} className="main-header-welcome">Welcome Back</animated.h4>
          <animated.h3  style={props} className="main-header-name">{currentUser.first_name} {currentUser.last_name}</animated.h3>
        <NavBar />
      </div>
    );
        
}

export default MainHeader;