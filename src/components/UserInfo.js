import React from "react";

function UserInfo({user}) {
    const {first_name, last_name, bio } = user;
    return (
        <div className="user-info">
            <p>{first_name} {last_name} </p>
            <p>{bio} </p>
        </div>
    )
}

export default UserInfo;