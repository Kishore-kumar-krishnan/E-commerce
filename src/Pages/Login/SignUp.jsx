import React, { useState } from 'react'
import './SignUp.css'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
export const SignUp=()=>{ 
  const schema=yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    mobile: yup.number().positive().integer().min(10),
    area:yup.string(),
    mail:yup.string().email(),
    password:yup.string().min(4),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null]),
  });
  const {register,handleSubmit}=useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className='login'>
        <div className="login-container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-fields">
                <div>
                <div className='firstname'>
                <input type="text" name="firstname"placeholder='FirstName' required  {...register("firstname")}></input></div>
                <div className="lastname">
                <input type="text" name="lastname"placeholder='LastName' required {...register("lastname")} ></input></div>
                </div>
                <input type="number" name="mobile" placeholder='mobile' required {...register("mobile")} />
                <textarea className="checkarea" placeholder="Type Your Address Here"  required {...register("area")}></textarea>
                <input type="email" name="mail" placeholder='Email Address' {...register("mail")}/>
                <input type="password" name="password" placeholder='Password' {...register("password")}/>
                <input type="password" name="confirmpassword" placeholder='Re-Enter Password' {...register("confirmpassword")}/>
            </div>
            <input  type='Submit' className='submit'/>
            {/* <Link to='/'><button>Confirm</button></Link> */}
            </form>
            <p className='login-login'>Already have an account?<Link to='/SignIn'><span >Login Here</span></Link></p>
            <div className="login-agree">
                <input type="checkbox" name='' id='' />
                <p>By Continuing,I agree to the terms of use &privacy policy.</p>
            </div>
        </div>
    </div>
  )
}
export default SignUp
