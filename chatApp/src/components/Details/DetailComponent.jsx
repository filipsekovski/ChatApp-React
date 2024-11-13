import React from "react";
import './details.scss'
import avatarImg from '../../images/avatar.jpg'
import { FaArrowUp, FaArrowDown, FaDownload } from 'react-icons/fa'

function DetailComponent() {

    return(
        <>
        <div className="details-section">
            <div className="user">
                <img src={avatarImg} alt="" />
                <h2>Filip Sekovski</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <FaArrowUp className="icon" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <FaArrowUp className="icon" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <FaArrowDown className="icon" />
                    </div>
                    <div className="photos">
                        <div className="photo-item">
                            <div className="photo-detail">
                            <img 
                            src={avatarImg} 
                            alt="" 
                            />
                            <span>avatar.jpg</span>
                            </div>
                            <FaDownload className="icon" />
                        </div>
                        <div className="photo-item">
                            <div className="photo-detail">
                            <img 
                            src={avatarImg} 
                            alt="" 
                            />
                            <span>avatar.jpg</span>
                            </div>
                            <FaDownload className="icon" />
                        </div>
                        <div className="photo-item">
                            <div className="photo-detail">
                            <img 
                            src={avatarImg} 
                            alt="" 
                            />
                            <span>avatar.jpg</span>
                            </div>
                            <FaDownload className="icon" />
                        </div>
                        <div className="photo-item">
                            <div className="photo-detail">
                            <img 
                            src={avatarImg} 
                            alt="" 
                            />
                            <span>avatar.jpg</span>
                            </div>
                            <FaDownload className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <FaArrowUp className="icon" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="log-out-btn">Log out</button>
            </div>
        </div>
        </>
    )
}
import { RxFontRoman } from "react-icons/rx";

export default DetailComponent;