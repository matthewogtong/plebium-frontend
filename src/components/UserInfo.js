import React from "react";

function UserInfo() {
    //had to delete deconstruction because we are passing in currentUser instead of User
    //
    return (
        <div className="user-info">
            <p>name here </p>
            <p>bio here  </p>
        </div>
    )
}

export default UserInfo;