import React, { useState } from 'react'
import './SignIn.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
export const SignIn=()=>{
  const schema=yup.object().shape({
    email:yup.string().email(),
    password:yup.string().min(4),
  });
  const {register,handleSubmit}=useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>LOGIN </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="loginsignup-fields">
                <input type="email" placeholder='Email Address'  required  {...register("email")}/>
                <input type="password" placeholder='Password' required {...register("password")}/>
            </div>
            <input type='Submit' className='submit'/>
            </form>
           {/* <Link to='/'> <button >Continue</button></Link> */}
            <p className='loginsignup-login'>Create an account?<Link to='/SignUp'><span >Click Here</span></Link></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By Continuing,I agree to the terms of use &privacy policy.</p>
            </div>
        </div>
    </div>
  )
}
export default SignIn
