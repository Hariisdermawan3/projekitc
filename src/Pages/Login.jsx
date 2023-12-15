import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import logo from './../assets/img/logoo.png'
import loginregist from './../assets/img/LoginRegist.png'

const Login = () => {

  const [emailval,setemailval]= useState("");
  const [passval,setpassval]= useState("");

  const handlesubmit = (event) => { 
    event.preventDefault();
  }

  return (
    <div className='main-login'>
      <div className="login-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} id='img-id' alt="" />
          </div>
          <Form onSubmit={handlesubmit}>
            <label For="emil1">Email</label>
            <input placeholder='Masukkan email kamu' type='email' 
            value={emailval} onChange={(e) => {setemailval(e.target.value)}} id='emil1' />
            <label For="pwd1">Password</label>
            <input placeholder='Masukkan password kamu' type='password'
            value={passval} onChange={(e) => {setpassval(e.target.value)}} id='pwd1' />
            <Link to='/beranda'>
            <Button type='submit' id='sub_butt'>Login</Button>
            </Link>
          </Form>

          <div className="login-footer">
            <p>Belum punya akun? <a href="/daftar">Daftar</a></p>
          </div>
        </div>
        <div className="right-side">
          <div className="loginregistImg">
            <img src={loginregist} id='lr-img-id' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login