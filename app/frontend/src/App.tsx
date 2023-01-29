import { useState, useContext  } from 'react'
// import { Switch, Route } from 'react-router-dom'
import { UserProvider } from './context/UserProvider' 
import {Users} from './Componentes/UserComponentes'
import {Cats} from './Componentes/Catcomponentes'
import {Dogs} from './Componentes/DogCompnente'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderMain } from './Componentes/Headermain'
import { UserBackApi } from './Componentes/Userbackend'
import { EditCliente } from './Componentes/PAGES/EditCliente'
import { Login } from './Componentes/Login'




function App() {
  return (
      <Routes>
        <Route element={<Login/>}  path="/" />
        {/* <Route  element={<HeaderMain/>}  path="/clientes" /> */}
        <Route element={<Users/>} path="/usuarios" />
        <Route element={<UserBackApi/>} path="/clients" />
        <Route element={<EditCliente/>} path="/edit/:id" />
       
        <Route element={<Cats/>} path="/cats" />
        <Route element={<Dogs/>} path="/dogs" />
      </Routes>
  )
}

export default App
