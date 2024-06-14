import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode'

export default function App() {
  const [data,setData] = useState({})
 

  const handleSuccess = (res) => {
    console.log(res)
    const decode = res ? jwtDecode(res.credential) : null 
    setData(decode)
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="428831924859-sqqqsv04jk7u2rn92pje9spnsgmc71ia.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => handleSuccess(credentialResponse)}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>

      <div>
        <img src={data.picture} alt="" />
        <h3>{data.name}</h3>
        <h3>{data.email}</h3>
        <h3>{data.sub}</h3>
      </div>
    </div>
  );
}
