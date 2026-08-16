import { createContext, useContext, useState } from 'react'
import { users } from '../data/users'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)


  function login(email) {
    setUser({ ...users[0], email })
  }

  function register(name, email) {
    const handle = '@' + name.toLowerCase().split(' ').join('.')
    setUser({ ...users[0], name, email, handle })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}


