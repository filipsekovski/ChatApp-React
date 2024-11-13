import React, { useState } from "react";
import './chatList.scss'
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import avatarImg from '../../../images/avatar.jpg'
import AddFriend from "./AddFriend/AddFriend";

function ChatListComponent() {

    const[addMode, setAddMode] = useState(false)

    return(
        <>
            <div className="chat-list">
                <div className="search">
                    <div className="search-bar">
                        <FaMagnifyingGlass className="icon" />
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="add-friend-btn" onClick={() => setAddMode(!addMode)}>
                        {
                            addMode? (<FaMinus className="icon add"/> ):(<FaPlus className="icon add"/>)
                        }
                    </div>
                </div>

                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="item">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
                {addMode && <AddFriend />}
        </>
    )
}

export default ChatListComponent;