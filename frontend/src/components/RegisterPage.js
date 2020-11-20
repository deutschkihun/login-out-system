import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../_actions/user_actions'
function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const nameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const confirmpasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }

     const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("Password doesn't match with confirmpassword")
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/login")
                } else {
                    alert("Failed to sign up")
                }
            })
    }


    return (
        <div className="loginPage">
            <form className="data" onSubmit={onSubmitHandler}>

                <label>Email</label>
                <input type="email" value={Email} onChange={emailHandler}/>
                    
                <label>Name</label>
                <input type="text" value={Name} onChange={nameHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={passwordHandler}/>
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={confirmpasswordHandler}/>
                <br/>
                <button type='submit'>
                    Login 
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
