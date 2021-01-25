import React from "react";
import TitleHeader from "./TitleHeader"
import About from "./About"
import TrendingList from "../TrendingList"

function TitlePage({ loginUsername, setLoginUsername, handleLoginSubmit }) {
return (
  <div id="title-page">
    <TitleHeader
      loginUsername={loginUsername}
      setLoginUsername={setLoginUsername}
      handleLoginSubmit={handleLoginSubmit}
    />
    <About />
    <TrendingList />
  </div>
);
}

export default TitlePage;