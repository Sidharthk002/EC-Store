import "./SignIn.scss";
// import { useEffect, useState } from "react";
import { useContext } from "react";

import { Context } from "../../utils/context";

export default function SingnIn() {
  const {handleChange} = useContext(Context)

  //   console.log(data[0].email);
  //   console.log(val[0].email);
  return (
    <div class="container2">
      <div id="box2">
        <h2>Sign In</h2>
        <form id="form2">
          <label for="email">Email Address</label>
          <input
            required
            type="text"
            placeholder="Enter email address"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <label for="password">Password </label>
          <input
            required
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          {/* <span><a href='#'>Forgot Password?</a></span> */}
          <input type="submit" value="Sign In" id="submit" />
        </form>
        <button>
          {" "}
          <span>
            <img src="https://sso.masaischool.com/google.svg" alt="" />{" "}
          </span>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
}
