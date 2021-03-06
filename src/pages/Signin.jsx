import React from 'react'
import {toast} from 'react-toastify'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Oath from '../components/Oath'

function Signin() {
  const [showPassword, setShowPassowrd] = useState(false)
  const [formData, setFormData] = useState({
      email: '',
      password: '',
  })

  const {email, password} = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
      try {
        e.preventDefault()

        const auth = getAuth()
  
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
        if(userCredential.user) {
            navigate('/profile')
        }

      } catch (error) {
          toast.error("Bad User Credentials")
      }
  }

  return (
    <>
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>
                    Welcome Back!
                </p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <input 
                    type="email" 
                    className='emailInput'
                    placeholder='Email'
                    id='email'
                    value={email}
                    onChange={onChange}
                    />

                    <div className='passwordInputDiv'>
                        <input 
                        type={showPassword ? 'text' : 'password'} 
                        className="passwordInput"
                        id='password'
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        />

                        <img 
                        src={visibilityIcon} 
                        alt='Show Password' 
                        className='showPassword'
                        onClick={() => setShowPassowrd((prevState) => !prevState)}/>
                    </div>

                    <Link to='/forgot-password' className='forgotPasswordLink'>
                        Forgot Password
                    </Link>

                    <div className='signInBar'>
                        <p className='singInText'>
                            Sign In
                        </p>
                        <button className='signInButton'>
                            <ArrowRightIcon fill="#ffffff" width="34px" height="34px"/>
                        </button>
                    </div>
                </form>
                <Oath />
                <Link to='/sign-up' className='registerLink'>
                    Sign Up
                </Link>
            </main>
        </div>
    </>
  )
}

export default Signin