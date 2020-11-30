import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../_actions/user_actions'
function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [LastName, setLastName] = useState("")
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

    const lastnameHandler = (e) => {
        setLastName(e.currentTarget.value)
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
            name: Name,
            lastname: LastName
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
        <div className="registerPage">
            <form className="data" onSubmit={onSubmitHandler}>

                <label>Name</label>
                <input type="text" value={Name} onChange={nameHandler}/>

                <label>Lastname</label>
                <input type="text" value={LastName} onChange={lastnameHandler}/>

                <label>Email</label>
                <input type="email" value={Email} onChange={emailHandler}/>
                    
                <label>Password</label>
                <input type="password" value={Password} onChange={passwordHandler}/>
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={confirmpasswordHandler}/>
                <br/>
                <button type='submit'>
                    Register 
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
