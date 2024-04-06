import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../utils/ReduxThings/user";
import { removeuser } from "../utils/ReduxThings/user";
import { useNavigate } from "react-router";
import { UseSelector } from "react-redux";
import { sendPasswordResetEmail } from "firebase/auth";
import { signOut } from "firebase/auth";



const Login = () => {
   const navigate = useNavigate()
  const userdata = useSelector((store)=>store.userdata)
  
  const [profile,setprofile] = useState(null)
  const profileimage = useRef();
  const setprofileimage =()=>{
           navigate("/")
             
  }
  const primage = ()=>{
    console.log(profileimage.current.value )
    setprofile(profileimage.current.value)
    
  }

  
  const dispatch = useDispatch();
 
  const [first, setfirst] = useState(true); //signup
  const [error,seterror] = useState(null)
  const name = useRef();
  const email = useRef();
  const Password = useRef();
  const signout = ()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
    dispatch(removeuser())
    
  }
  const resetpassword = ()=>{
    sendPasswordResetEmail(auth, userdata.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  const toggleform = () => {
    setfirst(!first);
  };
  const authorization = () => {
    if (first == true) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          seterror(null)
          if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = name.current.value;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            updateProfile(auth.currentUser, {
              displayName: displayName,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                console.log(user);
                const { displayName, email } = user;
                navigate("/")
                dispatch(
                  adduser({
                    displayName,
                    email,
                  })
                );
              })
              .catch((error) => {
                seterror(error)
              });
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
              console.log("email sended");
            });
          }

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          seterror(errorCode)
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
         seterror(null)
          const user = userCredential.user;
          console.log(user);
          const {displayName,email} = user
          console.log(displayName)
          console.log(email )
          dispatch(adduser({displayName,email}))
          navigate("/")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          seterror(errorCode)
        });
    }
  };
  

  return (
    <div className="">
      <div>
        <div
          className=" bg-gradient-to-tl from-zinc-950 to-cyan-700 absolute z-0 h-screen w-screen"
        
        />
      </div>

     {userdata == null && <div className=" absolute   h-screen w-screen flex  items-center justify-center  z-30">
        <div className="   w-64 border  bg-black rounded-xl bg-opacity-10 ">
          <p className="p-2 font-bold text-xl">
            {first == true ? "Signup" : "Signin"}
          </p>
          <div className="flex flex-col">
            {first == true && (
              <div className="flex m-4 ">
                <img
                  className=" mt-1 mr-1 h-5 w-5"
                  src="https://cdn3.iconfinder.com/data/icons/feather-5/24/user-1024.png"
                  alt=""
                />
                <input
                  ref={name}
                  placeholder="Name"
                  className=" p-1 bg-gray-800 border border-black bg-opacity-45 rounded-xl  font-semibold text-stone-100  "
                  type="text"
                />
              </div>
            )}
            <div className="flex m-4 ">
              <img
                className=" mt-1 mr-1 h-5 w-5"
                src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/mail4-1024.png"
                alt=""
              />

              <input
                ref={email}
                placeholder="Email"
                className=" bg-gray-800 border border-black bg-opacity-45 rounded-xl  font-semibold text-stone-100  p-1"
                type="text"
              />
            </div>
            <div className="flex m-4 ">
              <img
                className=" mt-1 mr-1 h-5 w-5"
                src="https://cdn0.iconfinder.com/data/icons/essentials-4/1710/lock-1024.png"
                alt=""
              />

              <input
                ref={Password}
                placeholder="Password"
                className=" bg-gray-800 border border-black bg-opacity-45 rounded-xl  font-semibold text-stone-100  p-1"
                type="text"
              />


            </div>
            {error!=null && <p className=" text-center text-red-900 font-medium">{error}</p>}
            <button
              onClick={authorization}
              className=" bg-gradient-to-br from-blue-800 to-cyan-500 w-20 h-8 hover:bg-opacity-60  text-white font-bold bg-opacity-50 ml-20 mt-3 rounded"
            >
              {first == true ? "Signup" : "Signin"}
            </button>
            <p
              onClick={toggleform}
              className=" text-center pt-4 pb-4 font-semibold cursor-pointer"
            >
              {first == true
                ? "already user ? login "
                : "not a user ? create account"}
            </p>
          </div>
        </div>
      </div>
      }
      {
        userdata != null && <div className="  h-screen w-screen flex justify-center items-center absolute ">
          
          <div className=" pb-7 pl-4 pr-6 border  bg-red-400 rounded-xl bg-opacity-10  border-black ">
              <div className=" flex  justify-between">
                <p className=" font-bold  text-white  text-2xl mt-7 ml-16 ">UserID - {userdata.displayName}</p>
                <div className=" mt-2">
                         
                 <div>
                    <img className=" h-16  w-16  mr-9 rounded-full" src={profileimage.current && profileimage.current.value } alt="" />
               
                    </div>
                     
                </div>
              </div>
              <p className=" font-bold text-white text-2xl  pt-5 pl-3">UID - {userdata.email}</p>
             <div className=" flex justify-evenly">
              <button onClick={signout}  className="  bg-red-400 w-20 h-8 hover:bg-opacity-60  text-white font-medium mt-9 rounded">SignOut</button>
              <button onClick={resetpassword}  className="  bg-red-400 pr-2 pl-2 h-8 hover:bg-opacity-60  text-white  font-medium mt-9 rounded">ResetPassword</button>
              <button onClick={setprofileimage}  className="  bg-red-400 pr-2 pl-2 h-8 hover:bg-opacity-60  text-white  font-medium mt-9 rounded">Home</button>

       
             </div>
             {
              <div className=" flex justify-center items-center border  rounded-2xl h-20 mt-5 border-black ">
                   <div>
                    <input ref={profileimage} type="text"  placeholder="Give image url (Ex-fb,ig,git..)" className=" pl-4 font-medium bg-transparent border h-7  w-60 rounded-s-full border-black"/>
                    <button onClick={primage} className="  bg-red-400 pr-2 pl-2 h-8 hover:bg-opacity-60 rounded-e-full  text-white  font-medium  rounded">SetImage</button>
                   </div>
              </div>
             }
                </div>
           
        </div>
      }
    </div>
  );
};

export default Login;
