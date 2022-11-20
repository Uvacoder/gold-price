import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = ({logged , setLogged}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [invalid , setInvalid] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        if(email && password) {
            var FormData = require('form-data');
            var data = new FormData();
            data.append('email', email);
            data.append('password', password);
            data.append('submit', 'submit');

            var config = {
            method: 'post',
            url: 'http://localhost/phpApi/login.php',
            headers: { 
                
            },
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(response.data);
            if(response.data.status == 200) {
                localStorage.setItem('loggedin' , response.data.data.id);
                localStorage.setItem('loggedname' , response.data.data.full_name);
                setInvalid('');
                setLogged(!logged);
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: <strong>Welcome {response.data.data.full_name} to Website</strong>,
                    html: <i>You will go to Home Page</i>,
                    icon: 'success',
                    timer: 2000
                })
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else if (response.data.status==400) {
                setInvalid(response.data.message);
            }
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

  return (
    <div style={{ height: "650px" }}>
      <div className="bg-gradient-to-l to-amber-300 from-stone-400 h-96 w-full">
        <div className="w-full flex items-center justify-center">
          <div className="relative top-20 bg-white shadow rounded py-6 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Login
            </p>
            {invalid ? <p className="text-danger text-2xl">{invalid}</p> : ''}
            <form onSubmit={(e)=> login(e)}>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="email"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                  onBlur={(e)=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Password
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please Enter Password"
                  type="password"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please Enter Password"
                  onBlur={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button type="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                Login
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
