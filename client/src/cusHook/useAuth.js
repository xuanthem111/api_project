import {useState, useEffect} from 'react'

export function useAuth() {
    const persistUser = localStorage.getItem("user");
    let localUser = null

    if (persistUser != null) {
        localUser = JSON.parse(persistUser)
    }
    const [user, setAuthUser] = useState(localUser);
    
    return [user, setAuthUser]
}