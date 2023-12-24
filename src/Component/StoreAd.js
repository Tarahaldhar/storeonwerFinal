import React, { useState } from 'react';
import './StoreAd.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Store/StoreAdminAuth/StoreAdminAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './NewAdminPanel/Sidebar';

const StoreAd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [storeLogin, setStoreLogin] = useState({
    email: "", password: ""
  })
  const handleInput = (e) => {
    e.preventDefault()
    setStoreLogin({
      ...storeLogin, [e.target.name]: e.target.value
    })
    console.log('input', storeLogin);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actionCreators.masterStoreAdmin(storeLogin))
    toast("Login successfully", { autoClose: 2000 })

    setTimeout(() => {
      navigate('/admin')
    }, 2000)
  }
  return (
    <>
      <ToastContainer />
      <section className='bg-img-page'>
        <div className="login-wrapper">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form>
          <div class="bg"></div>
          <div className="logo-header" style={{ width: '100%' }}>
            <img src="/img/wiseish.png" style={{ width: '200px', height: 'auto' }} />
          </div>
          <h3 style={{
            fontSize: '28px', textAlign: 'left', fontFamily: 'PT Sans',
          }}>
            Welcome! <b className='headingWelcomeBack'></b>
            <strong><span style={{ color: '#000', fontWeight: '500', fontSize: '12px', marginTop: '-20px', textAlign: 'left' }}>Sign in to access <b style={{ color: '#6442c0' }}>admin dashboard</b></span></strong>
          </h3>

          <input type="text" id="username" name='email' value={storeLogin.email} onChange={(e) => handleInput(e)} placeholder='Email' />

          <input type="password" id="password" name='password' value={storeLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />
          <div className='checkboxText'>
            <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{ fontSize: '12px' }} for="rememberMe">Remember me</label><br />

          </div>
          <button className="login-button-admin" onClick={(e) => handleSubmit(e)}>Login</button>
          <div className='login-side-img'>
            <img src='img/40174687890.png' style={{ height: 'auto', width: '100%', marginLeft: '0px' }} />
          </div>
        </form>
      </section>
    </>
  )
}

export default StoreAd