
import { Route ,Routes,BrowserRouter } from "react-router-dom"
import { lazy,Suspense } from "react"

const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Customer = lazy(()=>import("./pages/Customer"))
const Product = lazy(()=>import("./pages/Product"));
const Transaction = lazy(()=>import("./pages/Transaction"))
import Loader from "./components/Loader";
function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path="/admin/dashboard" element={<Dashboard/>} />
              <Route path="/admin/customer" element={<Customer/>} />
              <Route path="/admin/product" element={<Product/>} />
              <Route path="/admin/transaction" element={<Transaction/>} />
          </Routes>
        </Suspense> 
      </BrowserRouter>

    </>
  )
}

export default App
