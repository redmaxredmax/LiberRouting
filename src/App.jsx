import React from "react"
import { Home } from "./pages/home"
import { Route, Routes } from "react-router-dom"
import { Detail } from "./pages/detail"
import { MainLayout } from "./layout"
import { Detail2 } from "./pages/detail2/detail2"
import { HeroBooks } from "./pages/banner/banner"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />}/>
        <Route path="/added/:addedId" element={<Detail/>} />
        <Route path="/audio/:audioId" element={<Detail2/>}/>
        <Route path="/banner/:heroId" element={<HeroBooks/>}/>
        <Route path="*" element={<h1>Page Not Founded</h1>} />
      </Route>
    </Routes>
  )
}

export default App
