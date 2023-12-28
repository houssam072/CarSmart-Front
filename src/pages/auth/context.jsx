import { createContext, useState } from 'react'
// import { jwtDecode } from 'jwt-decode';
export const User = createContext({})

export default function UserProvider({children}){
    const [token, setToken] = useState({});
    const [refresh_token, setRefreshToken] = useState({})

    console.log('context', token);
    console.log('context', refresh_token);



    return(
         <User.Provider value={{token, setToken, refresh_token,setRefreshToken}}>
            {children}
        </User.Provider>
    );
}