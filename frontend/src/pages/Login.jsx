import { useState } from "react";
import logo from "../images/logo.png";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { api_base_url } from "../Helper";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userId", data.userId);
          setTimeout(() => {
            navigate("/");
          }, 100);
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <>
      <div className="flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
        <div className="flex w-full items-center">
          <div className="left w-[30%] flex flex-col ml-[100px]">
            <img className="w-[210px]" src={logo} alt="" />
            <form onSubmit={login} className="pl-3 mt-5" action="">
              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Email</p>
                <div className="inputBox w-[100%] ">
                  <i>
                    <MdEmail className="text-[red]" />
                  </i>
                  <input
                    className="text-[red]"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Email"
                    id="Email"
                    name="Email"
                    required
                  />
                </div>
              </div>

              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Password</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <RiLockPasswordFill className="text-[red]" />
                  </i>
                  <input
                    className="text-[red]"
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                    value={pwd}
                    type="password"
                    placeholder="Password"
                    id="Password"
                    name="Password"
                    required
                  />
                  <i className=" cursor-pointer !mr-3 !text-[25px]">
                    <IoEye className="text-[red]" />
                  </i>
                </div>
              </div>

              <p className="text-red-500 text-[14px] my-2">{error}</p>
              <p className="text-[red]">
                Yet to have an Account?
                <Link to="/signUp" className="text-blue-500">
                  Sing Up
                </Link>
              </p>

              <button className="p-[10px]  text-white rounded-lg border-0 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
