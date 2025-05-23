import { createContext } from "react";
export const AppContext = createContext()
import { useState } from "react";

const AppContextProvider = (props) => {
  
    const [user, setUser] = useState(null)
    
    return (
        <AppContext.Provider value={{ user}}>
        {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider