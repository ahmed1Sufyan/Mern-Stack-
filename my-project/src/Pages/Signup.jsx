import React from "react";
import { Wrapper } from "../components/Wrapper";
import { Component } from "react";
import { Inputfield } from "../components/Inputfield";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import Input from "../components/Input";
import { useRef } from "react";

export const Signup = () => {
  const ref = useRef(null)
    const ref1 = useRef(null)
  const submithandler = async() => {
    if( !ref.current.value && !ref1.current.value){
      alert("Please Enter Email and Password")
    }
    const data = {
      email: ref.current.value,
      password: ref1.current.value,
    }
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
       alert('Data sent successfully');
        // Handle success, if needed
      } else {
        alert('Failed to send data')
        // Handle error, if needed
      }
    } catch (error) {
      alert(error);
      // Handle error, if needed
    }
  }
  return (
      <Wrapper className=" flex flex-col items-center rounded-2xl bg-gray-300 py-[8rem] my-20 w-[40%] h-full">
        <h1 className="font-sans font-bold text-[2rem] mb-2">Create Account</h1>
        <Input ref={ref} className="mb-4 rounded-2xl py-1 px-6"/>
        <Input ref={ref1}  className="mb-4 rounded-2xl py-1 px-6"/>
        <button onClick={submithandler} className="bg-blue-400 py-2 px-10 mt-4 font-bold font-mono rounded-[30px]">Signup</button>
      </Wrapper>
  );
};
