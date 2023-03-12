import React from 'react';
import './login.css';
// import { Redirect } from 'react-router-dom';


export default function Login() {
  return (
    <div className="flex-container">
        <div className="content-container">
          <div className="form-container">
            <form action="/">
              <h1 dir='rtl'>
                پویش داده نوین
              </h1>
              <br />
              <br />
              <span className="subtitle" dir='rtl'>نام کاربری</span>
              <br />
              <div className="input-wrapper">
              <input type="text" name="username" dir='auto' placeholder='نام کاربری خود را وارد کنید' autoComplete='off'/>
              </div>
              <br />
              <span className="subtitle" dir='rtl'>کلمه عبور</span>
              <br />
              <div className="input-wrapper">
              <input type="password" name="password" dir='auto' placeholder='کلمه عبور خود را وارد کنید' />
              </div>
              <br /><br />
              <input type="submit" value="ورود" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }