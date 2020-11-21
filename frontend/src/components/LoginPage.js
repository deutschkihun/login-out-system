import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../_actions/user_actions'
import { withRouter } from 'react-router-dom'; 

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

     const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <main>
            <div className="loginPage">
                <form className="data" onSubmit={onSubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={emailHandler}/>
                    <label>Password</label>
                    <input type="password" value={Password} onChange={passwordHandler}/>
                    <br/>
                    <button type='submit'>
                        Login 
                    </button>
                </form>
            </div>
        </main>
     
    )
}

export default withRouter(LoginPage)
