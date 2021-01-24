import React from "react";
import TitleHeader from "./TitleHeader"
import About from "./About"
import TrendingList from "../TrendingList"

function TitlePage() {
return (
    <div id="title-page">
        <TitleHeader />
        <About />
        <TrendingList />
    </div>
)
}

export default TitlePage;