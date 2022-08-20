// react
import React, { useContext } from 'react'

// create context
const AuthContext = React.createContext()

// main function
export function AuthProvider({children, value}) {
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuthValue(){
  	return useContext(AuthContext);
}