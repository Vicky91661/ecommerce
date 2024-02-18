import { BrowserRouter,Route,Routes } from "react-router-dom"
import { lazy,Suspense } from "react"
const Home = lazy(()=>import("./pages/Home"))
const Cart = lazy(()=>import("./pages/Cart"))
const Search = lazy(()=>import("./pages/Search"))

import Load from "./pages/Load"
import Header from "./components/Header"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Suspense fallback={<Load/>}>
          <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path=""/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
