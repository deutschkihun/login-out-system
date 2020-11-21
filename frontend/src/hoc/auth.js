
import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { auth } from '../_actions/user_actions';


export default function (SpecificComponent, option, adminRoute = null) {

    //==option==//
    //null    =>  for everyone
    //true    =>  only for login user
    //false   =>  not allowed for login user
    function AuthenticationCheck(props) {
        const user = useSelector(state => state.user)
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)
                //didn't login
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    //already login
                    if (adminRoute && !response.payload.isAdmin) {
                        // not admin user goes into admin page
                        props.history.push('/')
                    } else {
                        if (option === false)
                            props.history.push('/')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}