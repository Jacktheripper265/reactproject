import axios from "axios";
import { useState } from "react";

var msg = "";
var lmsg='';
export async function RegisterUser(data) {
  await axios.post("http://localhost:1337/addUser", data).then(
    (response) => {
      if (response.data.code == "E_UNIQUE") {
        msg = "email already exist";

        console.log(msg);
      } else {
        console.log(response);
        msg = "Sucessfully Registered";
      }
     
    },
    (error) => {
      console.log(error);
    }
  );
  return msg;
}

export async function FindUser(data) {
  await axios.post("http://localhost:1337/findUser", data).then(
    (response) => {
       
      if(response.data.token )
      {
          localStorage.setItem('token',response.data.token);
      lmsg=response.data.msg;
      console.log(response.data.msg+" "+response.data.token)
      }
      else if(response.data.msg)
      {

      
      lmsg=response.data.msg;
      console.log(response.data.msg)
      }
      else if(response.data.per)
      {
        lmsg=response.data.msg;
      console.log(response.data.per)
      }
    },
    (error) => {
      console.log(error);
    }
  );
  return lmsg;
}
