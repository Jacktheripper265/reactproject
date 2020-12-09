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
          localStorage.setItem('user',JSON.stringify(response.data.user));
      lmsg=response.data.msg;
      
      console.log(response.data.msg+" "+response.data.token +'  '+ response.data.role)
      }
      else if(response.data.msg)
      {

      
      lmsg=response.data.msg;
      console.log(response.data.msg)
      }
      else if(response.data.per)
      {
        lmsg=response.data.per;
      console.log(response.data.per)
      }
    },
    (error) => {
      console.log(error);
    }
  );
  return lmsg;
}




export async function GetUser(data) {
  let user;
  await axios.get("http://localhost:1337/getUser").then(
    (response) => {
       console.log(response)
      user=response.data.users;
      
    },
    (error) => {
      console.log(error);
    }
  
  );
  return user;
}



export async function addPermission(data) {
 
  await axios.post("http://localhost:1337/setPermission",data).then(
    (response) => {
       console.log(response)
     
      
    },
    (error) => {
      console.log(error);
    }
  
  );

}