import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { loginUser } from "../config/firebasemethod";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
// import Loader from '../assets/loader.gif'
import CircularProgress from "@mui/material/CircularProgress";
// import userImg from '../assets/user.png'
import { useDispatch } from "react-redux";
import { edit } from "../redux/loginReducer";



function Login() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [model, setModel] = useState()

  // let login = () => {
  //   setIsLoading(true)
  //   loginUser({ email, password })
  //     .then((success) => {
  //       navigate(`/${success.id}`)
  //       console.log(success)
  //       // navigate(`/admin/${success.id.slice(0, 8)}`)
  //       // console.log(model)
  //       // setIsLoading(false)
  //       // if (email === 'admin@gmail.com') {
  //       //   console.log()
  //       // }
  //       // console.log((success))
  //     })
  //     .catch((error) => {
  //       setIsLoading(false)
  //       console.log(error)
  //     })
  //   // dispatch(edit(model));
  // };


let login = () =>{
  console.log(model)
  dispatch(edit(model))  // send data of object to redux using dispatch and dispatch is use for update data only 
  navigate('/home')
}

  return (
    <>
      <Box className='login'>
        <Box className='main' px={4} pt={5} pb={4}>
          {/* <img src={userImg} width='100' height='100' /> */}
          <h2 variant="h1" align="center" color="error">Login
          </h2>
          <Box mt={3}>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/signup')}>
              SignUp
            </Button>
          </Box>
          <Box mt={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e)=>setModel({ ...model, email: e.target.value })}
            // onChange={(e) => setEmail(e.target.value )}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e)=>setModel({ ...model, password: e.target.value })}
            // onChange={(e) => setPassword(e.target.value )}
            />
          </Box>
          <Box my={2}>
            <Button className='button' variant="contained" size="large" fullWidth onClick={login}>
              {isLoading ? <CircularProgress /> : 'Login'}
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>Create new account <Link to="/signup" style={{ textDecoration: 'none' }}>SIGN UP</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
