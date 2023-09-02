import React,{useState} from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'
const SignUpForm = ()=>{
    const [formValues, setFromValues] = useState({check:false, name:"",username:"",mail:"",mobile:""})
    const [nameError, setNameError] = useState(false)
    const [userNameError, setUserNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [mobileError, setMobileError] = useState(false)
    const [signUpError, setSignUpError] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setFromValues({...formValues,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        let valid = true;
        if(!(formValues.name.trim().length>0)){
            setNameError(true)
            valid = false;
        }else{
            setNameError(false)
        }
        if(!(formValues.username.trim().length>0)){
            setUserNameError(true)
            valid = false;
        }else{
            setUserNameError(false)
        }
        if(!(formValues.mail.trim().length>0)){
            setMailError(true)
            valid = false;
        }else{
            setMailError(false)
        }
        if(!(formValues.mobile.trim().length>0)){
            setMobileError(true)
            valid = false;
        }else{
            setMailError(false)
        }
        if(!formValues.check){
            setSignUpError(true)
            valid = false;
        }else{
            setSignUpError(false)
        }
        
        if(valid)
        {
            window.localStorage.setItem("userData",JSON.stringify(formValues))
            navigate('/category')
        }
    }
    return(
        <div className={styles.body}>
            <p className={styles.super}>Super App</p>
            <p>Create a new Account</p>
            <form>
                <input onChange={(e)=>handleChange(e)}  type="text" name='name'  placeholder="Name"></input>
                {nameError?<p className={styles.error}>Field is Required</p>:<></>}
                <input onChange={(e)=>handleChange(e)}  type="text" name='username'  placeholder="UserName"></input>
                {userNameError?<p className={styles.error}>Field is required</p>:<></>}
                <input onChange={(e)=>handleChange(e)}  type="email" name='mail'  placeholder="Email"></input>
                {mailError?<p className={styles.error}>Field is required</p>:<></>}
                <input onChange={(e)=>handleChange(e)}  type="tel"  name='mobile'  placeholder="Mobile"></input>
                {mobileError?<p className={styles.error}>Field is required</p>:<></>}
                <label>
                <input onChange={(e)=>setFromValues({...formValues,[e.target.name]:e.target.checked})}  type="checkbox" Name='check' />
                Share my registration data with Superapp
                </label>
                {signUpError?<p className={styles.error}>Check this box if you want to proceed</p>:<></>}
                <button type='submit'  onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
            </form>
            <footer className={styles.footer}>
                <p>By clicking on Sign up. you agree to Superapp <span style={{color:"#72DB73"}}><b> Terms and Conditions of Use</b></span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"#72DB73"}}><b> Privacy Policy</b></span></p>
            </footer>
        </div>
    )
}

export default SignUpForm