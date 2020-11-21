import { useGlobalContext } from "./context"
import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa';
import { social, links_login,links_logout } from './data';
import {useSelector} from 'react-redux'



const Sidebar = () => {

    const user = useSelector(state => state.user)

    const {isSidebarOpen,closeSidebar} = useGlobalContext();


    if(user.userData && !user.userData.isAuth){
        return(
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header' >
                <img src={logo} className='logo' alt="logo"/>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className='links'>
                {links_login.map((link) =>{
                    const {id,url,text,icon} = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <ul className='social-icons'>
                    {social.map((socialicon) =>{
                        const {id,url,icon} = socialicon
                        return (
                            <li key={id}>
                            <a href={url}>{icon}</a>
                            </li>
                            )
                        })}
                    </ul>
                </aside>
                )
    }else{
        return(
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header' >
                <img src={logo} className='logo' alt="logo"/>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className='links'>
                {links_logout.map((link) =>{
                    const {id,url,text,icon} = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <ul className='social-icons'>
                    {social.map((socialicon) =>{
                        const {id,url,icon} = socialicon
                        return (
                            <li key={id}>
                            <a href={url}>{icon}</a>
                            </li>
                            )
                        })}
                    </ul>
                </aside>
                )
    }

    
            }

export default Sidebar