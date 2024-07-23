import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginAction } from '../../action/UserAction';
import Loader from "../Home/Loader";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated, error } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login success");
      nav("/");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, nav, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(username, password)
    dispatch(loginAction(username, password));
  };

  return (
    <>
      {loading ? <Loader /> : (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="p-5 h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Login
              <span className="text-blue-500">
                &nbsp;ChatApp
              </span>
            </h1>
            <form onSubmit={handleLogin}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter Your Username" 
                  className="w-full input input-bordered h-10" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label p-2">
                  <span className="text-base label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  placeholder="Enter Your Password" 
                  className="w-full input input-bordered h-10"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn-block glass mt-2 btn btn-primary btn-sm">Login</button>
                <Link to="/signup" style={{ textDecoration: "None" }} className="mt-3 link link-info">Don`t have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
