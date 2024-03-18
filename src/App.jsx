import { NavBars } from './components/NavBars'
import { AddDiploView } from './routes/AddDiploView'
import { HomeView } from './routes/HomeView'
import { Route, Routes } from "react-router-dom"
export const App = () => {
    return (    
        <>      
        <NavBars/>
        <Routes>
          <Route path='/home' element={ <HomeView></HomeView> }></Route>
          <Route path='/adddiploma' element={ <AddDiploView/> }></Route>
        </Routes>
        </>
    )
  }