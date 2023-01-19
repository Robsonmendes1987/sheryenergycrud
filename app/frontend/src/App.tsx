import { useState, useContext  } from 'react'
// import { Switch, Route } from 'react-router-dom'
import { UserProvider } from './context/UserProvider' 
import {Users} from './Componentes/UserComponentes'
import {Cats} from './Componentes/catcomponentes'
import {Dogs} from './Componentes/dogCompnente'
import { UserBackApi } from './Componentes/userbackend'
import { Login } from './Componentes/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)
  return (
      <Routes >
        <Route element={<Login/>}  path="/" />
        <Route element={<UserBackApi/>} path="/clientes" />
        <Route element={<Cats/>} path="/cats" />
        <Route element={<Dogs/>} path="/dogs" />
        <Route element={<Users/>} path="/usuarios" />
      </Routes>
  )
}

export default App
