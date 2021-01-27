import React from "react";

function CommentsList({newResponse, setNewResponse, handleResponseSubmit}) {
//needs post function 
    return (
        <div>
        <h5>Comments List</h5>
        <form onSubmit={handleResponseSubmit} className="response-form">
            <input
            type="text"
            name="story-response"
            value={newResponse}
            onChange={(e) => setNewResponse(e.target.value)}
            />
            <input type="submit" value="Post Response" />
        </form>
        </div>
    )
}

export default CommentsList;