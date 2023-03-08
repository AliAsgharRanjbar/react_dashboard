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
                ورود
              </h1>
              <br />
              <br />
              <span className="subtitle" dir='rtl'>نام کاربری</span>
              <br />
              <input type="text" name="username" dir='rtl' placeholder='نام کاربری خود را وارد کنید' />
              <br />
              <span className="subtitle" dir='rtl'>کلمه عبور</span>
              <br />
              <input type="password" name="password" dir='rtl' placeholder='کلمه عبور خود را وارد کنید' />
              <br /><br />
              <input type="submit" value="ورود" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }