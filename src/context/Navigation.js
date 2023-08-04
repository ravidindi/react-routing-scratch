import { createContext,useState,useEffect } from "react"
const NavigationContext=createContext();

function NavigationProvider({children}){

    const [currentPath,setCurrentPath]=useState(window.location.pathname)

    const navigate=(to)=>{
        
        window.history.pushState({},"",to);
        setCurrentPath(to);
    }


    useEffect(
        ()=>{
            const handlePathChange=()=>{
                console.log('path changed')
                setCurrentPath(window.location.pathname)
            }
            window.addEventListener('popstate',handlePathChange)
            return ()=>window.removeEventListener('popstate',handlePathChange)
        },[]
    )
    return <NavigationContext.Provider value={{currentPath,navigate}}>
        {children}
    </NavigationContext.Provider>
}
export {NavigationProvider}
export default NavigationContext;