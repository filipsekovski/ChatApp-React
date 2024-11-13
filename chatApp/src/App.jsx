import React, { useEffect } from 'react'
import './global.scss'
import ListComponent from './components/List/ListComponent'
import ChatComponent from './components/Chat/ChatComponent'
import DetailComponent from './components/Details/DetailComponent'
import LogIn from './components/LogIn/login'
import Notification from './components/Notification/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Libary/firebase'

function App() {

  const user = false

  useEffect(() => {
      const unSub = onAuthStateChanged(auth, (user)=> {
        console.log(user)
      })

      return () => {
        unSub()
      }
  }, [])

  return (
    <>
      <div className="container">
        {
          user? (
            <>
              <ListComponent />
              <ChatComponent />
              <DetailComponent />
            </>
          ) : (
            <LogIn />
          )
        }
        <Notification />
      </div>
    </>
  )
}

export default App
