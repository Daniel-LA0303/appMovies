import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            {/* <Route path="nuevo" element={<NuevoCliente />} /> */}
            {/* <Route path="editar/:id" element={<EditarCliente />}/>
            <Route path=":id" element={<VerClientes/>}/> */}
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
