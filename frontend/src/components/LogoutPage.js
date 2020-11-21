import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'; 

function LogoutPage(props) {

    const logoutHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success){
                    props.history.push('/')
                }else{
                    alert('fail to logout')
                }
            })
    }
    return (
        <div>
           <p>Hey there, do you really want to logut</p>
           <button onClick={logoutHandler}>
               Logout
           </button>
        </div>
    )
}

export default withRouter(LogoutPage)
