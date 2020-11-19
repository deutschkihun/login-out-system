import React,{useState} from 'react'
import Axios from 'axios'

function LoginPage() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault();

        //console.log(Email)
        //console.log(Password)

        let body = {
            email:Email,
            password:Password
        }
    }

    return (
        <div className="loginPage">
            <form className="data" onSubmit={SubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={emailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={passwordHandler}/>
                <br/>
                <button >
                    Login 
                </button>
            </form>
        </div>
    )
}

export default LoginPage
