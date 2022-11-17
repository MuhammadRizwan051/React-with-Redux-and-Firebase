import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../config/firebasemethod'
import { useSelector } from "react-redux";


function Home() {

    const navigate = useNavigate()
    const [userId, setUserId] = useState('')

    let checkAuth = () => {
        checkUser()
            .then((res) => {
                setUserId(res)
                console.log(res)  // userId receive
            })
            .catch((err) => {
                navigate('/login')
                console.log(err)
            })
    }
    useEffect(() => {
        checkAuth()
    }, [])

    const loginDataFromReducer = useSelector(a => a.loginReducer)
    console.log(loginDataFromReducer)  // Object receive  loginSlice(initialState) data

    return (
        <>
            <h1 style={{ color: 'red', fontWeight: 'bold' }}>Home Screen</h1>
            <h1>UserName: {loginDataFromReducer.userName}</h1>
            <h1>Email: {loginDataFromReducer.email}</h1>
            <h1>Password: {'*'.repeat(loginDataFromReducer.password.length)}</h1>
        </>
    )
}

export default Home