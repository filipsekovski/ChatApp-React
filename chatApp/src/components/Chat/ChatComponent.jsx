import React, { useEffect, useRef, useState } from "react";
import './chat.scss'
import avatarImg from '../../images/avatar.jpg'
import { FaPhone, FaCamera, FaInfoCircle, FaImages, FaMicrophone } from 'react-icons/fa'
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react"

function ChatComponent() {

    const [openEmoji, setOpenEmoji] = useState(false)
    const [text, setText] = useState("")

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    const handleEmoji = e => {
        setText(prev=>prev+e.emoji)
        setOpenEmoji(false)
    }


    return(
        <>
        <div className="chat-section">
            <div className="top">
                <div className="user">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <span>Filip Sekovski</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icons">
                    <FaPhone className="icon" />
                    <FaCamera className="icon" />
                    <FaInfoCircle className="icon" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque ab excepturi at, repudiandae repellendus odio incidunt recusandae. Ratione aspernatur nobis repellat laborum deleniti molestias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque ab excepturi at, repudiandae repellendus odio incidunt recusandae. Ratione aspernatur nobis repellat laborum deleniti molestias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div><div className="message own">
                    <div className="texts">
                        <img src={avatarImg} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque ab excepturi at, repudiandae repellendus odio incidunt recusandae. Ratione aspernatur nobis repellat laborum deleniti molestias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div><div className="message">
                    <img src={avatarImg} alt="" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque ab excepturi at, repudiandae repellendus odio incidunt recusandae. Ratione aspernatur nobis repellat laborum deleniti molestias.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <FaImages className="icon" />
                    <FaCamera className="icon" />
                    <FaMicrophone className="icon" />
                </div>
                <input type="text" placeholder="Type a message..." onChange={(e) => setText(e.target.value)} value={text}/>
                <div className="emoji">
                    <MdEmojiEmotions className="emoji-icon" onClick={() => setOpenEmoji(!openEmoji)}/>
                    <EmojiPicker open={openEmoji} className="emojiPicker" onEmojiClick={handleEmoji} />
                </div>
                <button className="sendBtn">Send</button>
            </div>
        </div>
        </>
    )
}

export default ChatComponent;