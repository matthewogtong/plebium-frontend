import React, {useState} from "react";

//read time button/topic drop-down
function StoryInputs({onSetReadTime}) {
    const [readTime, setReadTime] = useState([])
    return (
        <div>
        <h5>Story Inputs</h5>
        <form>
            <input 
            type="number"
            name="read-time"
            value={readTime}
            onChange={(e) => setReadTime(parseInt(e.target.value))}>
            </input> minutes
        </form>
        </div>
        
    )
}

export default StoryInputs;