import React from "react";
import './userInfo.scss'
import { BsThreeDots } from "react-icons/bs";
import { FaCamera, FaEdit } from "react-icons/fa";
import avatarImg from '../../../images/avatar.jpg'

function UserInfoComponent() {
    return(
        <>
            <div className="user-info">
                <div className="user">
                    <img src={avatarImg} alt="" />
                    <h2>Filip Sekovski</h2>
                </div>
                <div className="icons">
                    <BsThreeDots className="icon"/>
                    <FaCamera className="icon"/>
                    <FaEdit className="icon"/>
                </div>
            </div>
        </>
    )
}

export default UserInfoComponent;