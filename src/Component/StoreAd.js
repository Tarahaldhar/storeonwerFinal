import React, {useState} from 'react';
import './StoreAd.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Store/StoreAdminAuth/StoreAdminAction';

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
        alert("Store Owner Login Successfully")
        navigate('/sales')
    }
  return (
    <div>
            <div className="login-wrapper">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  
    <form>
    <div class="bg"></div>
      <div className="logo-header">
        <img src="img/logoWish.png" style={{width:'200px',height:'auto'}} />
      </div>
      <h3 style={{fontSize:'25px', textAlign:'left'}}>
        Welcome! <b className='headingWelcomeBack'></b>
        <strong><span style={{color:'#000', fontWeight:'500', fontSize:'12px', marginTop:'-20px',textAlign:'left'}}>Sign in to access admin dashboard</span></strong>
      </h3>

      {/* <label for="username">Email</label> */}
      <input type="text"  id="username" name='email' value={storeLogin.email} onChange={(e) => handleInput(e)} placeholder='Email' />

      {/* <label for="password">Password</label> */}
      <input type="password"  id="password" name='password' value={storeLogin.password} onChange={(e) => handleInput(e)} placeholder='Password'/>

      <button onClick={(e) => handleSubmit(e)}>Login</button>
    </form>
    </div>
  )
}

export default StoreAd