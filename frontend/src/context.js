import React,{useState,useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setisSidebarOpen] = useState(false)

    const openSidebar = () => {
        setisSidebarOpen(true)
    }
    const closeSidebar = () => {
        setisSidebarOpen(false)
    }

    return (
        <AppContext.Provider
        value={{
           isSidebarOpen,
           openSidebar,
           closeSidebar 
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}