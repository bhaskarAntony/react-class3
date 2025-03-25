import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { ArrowForward } from '@mui/icons-material';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/error/Error';
import AllUsers from './pages/AllUsers/AllUsers';
function App() {

  return (
   <Fragment>
   <Header/>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllUsers/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
   </Fragment>
  )
}

export default App