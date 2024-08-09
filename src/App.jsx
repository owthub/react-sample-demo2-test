import { Routes, Route, useNavigate, Link, useRoutes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import MyStyle from './assets/mystyle.module.css'
import SingleProduct from './pages/SingleProduct'
import FormValidation from './pages/FormValidation'
import MyRef from './pages/MyRef';
import MyMemo from './pages/MyMemo'
import MyCallback from './pages/MyCallback'
import ReactQueryDemo from './react-query-demo/ReactQueryDemo'

function CustomRoutes(){

  const routes = useRoutes([
    {
      path: "/", 
      element: <Home />
    },
    {
      path: "/about-us",
      element: <About />
    },
    {
      path: "/contact-us",
      element: <ContactUs />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/single-product/:id",
      element: <SingleProduct />
    },
    {
      path: "/basic-form-validation",
      element: <FormValidation />
    },
    {
      path: "/my-ref",
      element: <MyRef />
    },
    {
      path: "/my-memo",
      element: <MyMemo />
    },
    {
      path: "/my-callback",
      element: <MyCallback />
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />
    },
    {
      path: "*",
      element: <Error404 />
    }
  ])

  return routes;
}

function App() {

  const navigate = useNavigate();

  return (
    <>
    {/* <div>
      <Link className={MyStyle.link_btns} to={"/"}>Home</Link>
      <Link className={MyStyle.link_btns} to={"/about-us"}>About Us</Link>
      <Link className={MyStyle.link_btns} to={"/contact-us"}>Contact Us</Link>
      <Link className={MyStyle.link_btns} to={"/products"}>Products</Link>
    </div> */}
    {/* <div>
      <button onClick={() => navigate("/about-us")}>About Us Page</button>
      <button onClick={() => navigate("/contact-us")}>Contact Us Page</button>
      <button onClick={()=> navigate("/products")}>Products Page</button>
    </div> */}
    {/* <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/about-us"} element={<About />}/>
      <Route path={"/contact-us"} element={<ContactUs />}/>
      <Route path={"/products"} element={<Products />}/>
      <Route path='/single-product/:id' element={ <SingleProduct /> }/>
      <Route path="*" element={<Error404 />} />
    </Routes> */}

      <CustomRoutes />
    </>
  )
}

export default App
