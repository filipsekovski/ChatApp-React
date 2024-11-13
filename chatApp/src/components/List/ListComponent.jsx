import React from "react";
import './list.scss'
import UserInfoComponent from "./UserInfo/UserInfoComponent";
import ChatListComponent from "./ChatList/ChatListComponent";

function ListComponent() {

    return(
        <>
        <div className="list-section">
            <UserInfoComponent />
            <ChatListComponent />
        </div>
        </>
    )
}

export default ListComponent;