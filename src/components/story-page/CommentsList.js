import React, {useState} from "react";

function CommentsList({handleResponseSubmit}) {
const [newResponse, setNewResponse] = useState("")
//needs post function 
    return (
        <div>
        <h5>Comments List</h5>
        <form onSubmit={handleResponseSubmit} className="response-form">
            <input
            type="text"
            name="story-response"
            value={newResponse}
            onClick={(e) => setNewResponse(e.target.value)}
            />
        </form>
        </div>
    )
}

export default CommentsList;