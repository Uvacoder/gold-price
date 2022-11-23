import { React, useEffect } from 'react';
import { gapi } from "gapi-script";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from './refreshToken'

const clientId =
  '858877673740-4d21ul88s67iobt0il8g0nc50qcbj8fp.apps.googleusercontent.com';

function LoginGoogle() {

  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });


  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    localStorage.setItem('loggedin' , 99);
    localStorage.setItem('loggedname' , res.profileObj.name);
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: <strong>Welcome {res.profileObj.name} to Website</strong>,
      html: <i>You will return to shop page</i>,
      icon: 'success',
      timer: 3000
    })
    setTimeout(() => {
      navigate('/shop');
    }, 3000);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ color: 'red', backgroundColor: 'red' }}
        className="text-base font-semibold leading-none text-dark px-10 bg-amber-300 rounded hover:bg-amber-200 focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 focus:outline-none"
        // isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;