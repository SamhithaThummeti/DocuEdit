import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaUser } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import nameTag from "../images/nameTag.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import rightIMG from "../images/signUpRight.png";
import { api_base_url } from "../Helper";
import { MdDriveFileRenameOutline } from "react-icons/md";


const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        phone: phone,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setError(data.message);
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <>
      <div className="flex overflow-hidden align-items-center w-screen justify-content-center flex-col h-screen bg-[#F0F0F0] ">
        <div className="w-full m-18 flex align-items-center justify-content-center">
          <div className="left w-[30%] flex flex-col ml-[100px]">
            <img className="w-[210px]" src={logo} alt="" />
            <form onSubmit={createUser} className="pl-3 mt-5" action="">
              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Username</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <FaUser className="text-[red]" />
                  </i>
                  <input
                    className="text-[red]"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    value={username}
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    required
                  />
                </div>
              </div>

              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Name</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <MdDriveFileRenameOutline className="text-[red]" />
                  </i>
                  <input
                    className="text-[red]"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    placeholder="Name"
                    id="Name"
                    name="Name"
                    required
                  />
                </div>
              </div>

              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Email</p>
                <div className="inputBox w-[100%]">
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
                <p className=" text-[14px] text-[#808080]">Phone</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <FaPhone className="text-[red]" />
                  </i>
                  <input
                    className="text-[red]"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                    type="phone"
                    placeholder="Phone"
                    id="Phone"
                    name="Phone"
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
                Already have an account?
                <Link to="/login" className="text-blue-500 ">
                  Login
                </Link>
              </p>

              <button className="p-[10px]  text-white rounded-lg  mt-3">
                Sing Up
              </button>
            </form>
          </div>
          {/* <div className="right flex items-end justify-end">
            <img className="h-full" src={rightIMG} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;
