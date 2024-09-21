import { redirect } from "next/navigation";
import React from "react";

function LoginScript(formData: any) {
  var User = formData.get("Username");
  var Pass = formData.get("Password");
  console.log(User + Pass);
  if (User == "booster123@gmail.com")
    if (Pass == "boost123") {
      alert("Logged In");
      redirect("./../boostingarea");
    } else {
      alert("wrong username and password");
    }
}

export default LoginScript;
