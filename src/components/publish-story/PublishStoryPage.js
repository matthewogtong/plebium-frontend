import React, {useState} from "react";
import PublishContainer from "./PublishContainer"
import PublishInputContainer from "./PublishInputContainer"

function PublishStoryPage() {
const [readTime, setReadTime] = useState([])

    function handleReadTime() {
        setReadTime(readTime)
    }

    return (
        <div>
            <PublishContainer />
            <PublishInputContainer readTime={readTime} setReadTime={setReadTime} onSetReadTime={handleReadTime} />
        </div>
    )

}

export default PublishStoryPage;