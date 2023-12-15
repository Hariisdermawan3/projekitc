import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../assets/img/logoo.png';
import loginregist from './../assets/img/LoginRegist.png';

const Register = () => {
  const [emailval, setEmailVal] = useState("");
  const [passval, setPassVal] = useState("");
  const [confirmPassVal, setConfirmPassVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className='main-register'>
      <div className="register-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} id='img-id' alt="" />
          </div>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              placeholder='Masukkan email kamu'
              type='email'
              value={emailval}
              onChange={(e) => { setEmailVal(e.target.value) }}
              id='email'
            />
            <label htmlFor="password">Password</label>
            <input
              placeholder='Masukkan password kamu'
              type='password'
              value={passval}
              onChange={(e) => { setPassVal(e.target.value) }}
              id='password'
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              placeholder='Konfirmasi password kamu'
              type='password'
              value={confirmPassVal}
              onChange={(e) => { setConfirmPassVal(e.target.value) }}
              id='confirmPassword'
            />
            <Link to='/login'>
            <Button type='submit' id='sub_butt'>Register</Button>
            </Link>
          </Form>

          <div className="register-footer">
            <p>Sudah punya akun? <a href="/login">Login</a></p>
          </div>
        </div>
        <div className="right-side">
          <div className="loginregistImg">
            <img src={loginregist} id='lr-img-id' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
