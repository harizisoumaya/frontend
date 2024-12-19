import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./components/admin/articles/Listarticles"
import Insertarticles from "./components/admin/articles/Insertarticles"
import Editarticles from "./components/admin/articles/Editarticles"
import Listcategories from "./components/admin/categories/Listcategories"
import Editscategories from "./components/admin/scategories/Editscategories"
import Insertscategories from "./components/admin/scategories/Insertscategories"
import Listscategories from "./components/admin/scategories/Listscategories"
import Insertcategories from "./components/admin/categories/Insertcategories"
import Editcategories from "./components/admin/categories/Editcategories"
import Menu from "./components/admin/Menu"
import Home from "./components/admin/Home"

const App = () => {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticles/>}/>
        <Route path="/articles/edit/:id" element={<Editarticles/>}/>

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategories/>}/>
        <Route path="/categories/edit/:id" element={<Editcategories/>}/>


        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategories/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategories/>}/>
      </Routes>

    </Router> 
 )
}

export default App