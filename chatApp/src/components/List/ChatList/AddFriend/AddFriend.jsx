import React from "react";
import './addFriend.scss'
import avatarImg from '../../../../images/avatar.jpg'

function AddFriend() {
    return(
        <>

            <div className="add-friend">
                <form action="">
                    <input type="text" name="username" placeholder="Username" />
                    <button>Search</button>
                </form>
                <div className="user">
                    <div className="detail">
                        <img src={avatarImg} alt="" />
                        <span>Filip Sekovski</span>
                    </div>
                    <button>Add User</button>
                </div>
            </div>

        </>
    )
}

export default AddFriend