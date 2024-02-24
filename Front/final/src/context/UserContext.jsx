import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext()

function UserProvider({ children }) {
    const [token, setToken] = useState(null)
    const [decode, setDecode] = useState(null)

    function addToken(token) {
        setToken(token)
        const token_decoded = jwtDecode(token);
        console.log(token);
        console.log(token_decoded);
        setDecode(token_decoded)
    }

    function logOut() {
        setDecode(null)
        setToken(null)
    }
    return (
        <UserContext.Provider value={{token, decode , addToken, logOut}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserProvider