import { createContext, useContext, useState } from "react"

// The app doesn't know beforehand who the logged in user will be
const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {

    // An oversimplification that assumes an already logged in user
    const [user] = useState({
        name: "John",
        email: "john@example.com",
        dob: "01/01/2000"
    })

    // Allows consuming components to subscribe to value changes
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext)