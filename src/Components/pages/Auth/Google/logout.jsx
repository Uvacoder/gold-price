import React from 'react';
import { GoogleLogout } from 'react-google-login';
// import {refreshTokenSetup} from './refreshToken' 


const clientId =
  '858877673740-4d21ul88s67iobt0il8g0nc50qcbj8fp.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
    localStorage.removeItem('loggedin');
    localStorage.removeItem('loggedname');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;