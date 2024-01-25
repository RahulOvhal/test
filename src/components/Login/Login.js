import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Product from "../Product/Product"
// import Header from '../Product/Header'
import "./Login.css"

const Login = () => {
    const emailValue = "india@123.in"

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[errors, setErrors] = useState({})
    const[isLogedIn, setIsLogedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(email===emailValue){
            setIsLogedIn(true); 
        }
    },[])

   
    const validateForm = ()=>{

        let isValidate = true;

        const newErrors = {};

        if(!email.trim()){
            newErrors.email = "Email is Required";
            isValidate = false;
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = "Email is Invalid";
            isValidate = false;
        }     
        else if(email !== 'india@123.in' || password !== 'IloveIndia123'){
            
            setErrors('Invalid email or password');
            return;
              
        }

         if(!password.trim()){
            newErrors.password = "Password is Required";
            isValidate = false;
        }else if(password.length < 6){
            newErrors.password = "Password Should be 6 laters atleast";
            isValidate = false
        }
        console.log("validation pass")

        setErrors(newErrors)
        return isValidate;
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(validateForm()){      
            console.log('welcome');

            navigate("/productlisting");
          
        }
      
    }

  return (
    <div className='loginpage'>
        <div className='loginform'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='formfeild'>
                <div className='Email'>
                    <label>Email</label>
                    <input 
                    type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div className='password'>
                    <label>Password</label>
                    <input 
                    type='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    {errors.password && <span>{errors.password}</span>}

                </div>

            
                <button type='submit' className='loginbtn'> Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
