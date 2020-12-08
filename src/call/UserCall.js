import axios from "axios";
import { useState } from "react";

var msg = "";
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
      //   console.log(response);
      //   return response;
    },
    (error) => {
      console.log(error);
    }
  );
  return msg;
}

export function FindUser(data) {
  axios.post("http://localhost:1337/findUser", data).then(
    (response) => {
      console.log(response.data.user);
    },
    (error) => {
      console.log(error);
    }
  );
}
