import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'; 


function LandingPage(props) {

    const onClickHandler = () => {

        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success){
                    props.history.push('/login')
                }else{
                    alert('fail to logout')
                }
            })
    }

    return (
        <div>
            LandingPage

            <button onClick={onClickHandler}>
                Logout
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
