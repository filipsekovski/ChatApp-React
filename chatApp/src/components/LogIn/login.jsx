import React, { useState } from "react";
import './login.scss'
import avatarImg from '../../images/avatar.jpg'
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "../../Libary/firebase";

function LogIn() {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })
    
    const [loading, setLoading] = useState(false)

    const handleAvatar = e => {
        if(e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = async e => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)

        try{

            await signInWithEmailAndPassword(auth,email, password)

        }catch(err) {
            console.log(err)
            toast.error(err.message)
        }finally {
            setLoading(false)
        }
    }

    const handleRegister = async e => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const { username, email, password } = Object.fromEntries(formData)

        try{

            const res = await createUserWithEmailAndPassword(auth, email, password)

            await setDoc(doc(dataBase, "users", res.user.uid), {
                username: username,
                email: email,
                id: res.user.uid,
                blocked: []
              });

              await setDoc(doc(dataBase, "userschats", res.user.uid), {
                chats: []
              });

              toast.success("Account created! You can Login now")

        }catch(err) {
            console.log(err)
            toast.error(err.message)
        }finally {
            setLoading(false)
        }
    }

    return(
        <>
            <div className="log-in">
                <div className="item">
                    <h2>Welcome back,</h2>
                    <form action="" onSubmit={handleLogin}>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button disabled={loading}>{loading? "Loading": "Log In"}</button>
                    </form>
                </div>
                <div className="line"></div>
                <div className="item">
                    <h2>Create an Account</h2>

                    <form action="" onSubmit={handleRegister}>
                        <label htmlFor="file">
                            <img src={avatar.url || avatarImg} alt="" />Upload an image</label>
                        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar} />
                        <input type="text" placeholder="Username" name="username"/>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button disabled={loading}>{loading? "Loading": "Sign Up"}</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default LogIn