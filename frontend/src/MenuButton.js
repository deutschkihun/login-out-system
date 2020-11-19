import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const MenuButton = () => {
    const {openSidebar} = useGlobalContext();

    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars/>
            </button>
        </main> 
    )
}

export default MenuButton