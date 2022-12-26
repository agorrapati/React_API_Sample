import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerState } from '../../reducers';

const LoginFormPage = (e:any) =>{
    const dispatch = useDispatch();

return (
    <Fragment>
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name=""/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" />
                    <label>Password</label>
                </div>
                <div className="button-form">
                    <a id="submit" href="#">Submit</a>
                    <div id="register">
                        Don't have a account ?
                        <a href="#">Register</a>
                    </div>
                </div>
            </form>
        </div>
    </Fragment>
 )
}

export default LoginFormPage;