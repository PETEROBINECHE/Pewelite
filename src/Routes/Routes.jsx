// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HashRouter, Route, Routes } from "react-router-dom";
import Landingpage from '../Pewcare/Landingpage'
import About from '../Pewcare/About'
import Contact from '../Pewcare/Contact'
import Ourservice from "../Pewcare/Ourservice";
import Product from "../Pewcare/Product";
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Layouts/MainLayout";
import Home1 from "../Pages/Home1";
import Aboutaa from "../Pages/Aboutaa";
import Contactcc from "../Pages/Contactcc";
import Ourserviceoo from "../Pages/Ourserviceoo";
import Products from "../Pages/Products";
import ServicesLayout from "../Layouts/ServicesLayout";
import Summary from "../Pages/Summary";
import PetAdoption from "../Pages/PetAdoption";
import PetAdoptionLayout from "../Layouts/PetAdoptionLayout";
import Prouctdelits from "../Pages/Prouctdelits";




 const AppRoute = () => {

  return (
    <HashRouter>
        <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home1 />}></Route>
            </Route>

            <Route element={<MainLayout />}>
              <Route path="/about" element={<Aboutaa />}></Route>
              <Route path="/contact" element={<Contactcc />}></Route>
              <Route path="/service" element={<Ourserviceoo />}></Route>
            </Route>

            <Route element={<ServicesLayout />}>
              <Route path="/product" element={<Products />}></Route>
              <Route path="/prolist/:id" element={<Products />}></Route>
              <Route path="/ourservice" element={<Ourserviceoo />}></Route>
            </Route>

            <Route element={<PetAdoptionLayout />}>
              <Route path="/pawadoption" element={<PetAdoption />}></Route>
              <Route path="/product/:id" element={<PetAdoption />}></Route>
            </Route>

            <Route path="/summary1" element={<Summary />}></Route>

            {/* <Route path="/product/:id" element={<Prouctdelits />}></Route> */}

            
            {/* <Route path="/" element={<Landingpage />}></Route> */}
            {/* <Route path="/about" element={<About />}></Route> */}
            {/* <Route path="/contact" element={<Contact />}></Route> */}
            {/* <Route path="/ourservice" element={<Ourservice />}></Route> */}
            {/* <Route path="/Product" element={<Product />}></Route> */}
        </Routes>
    </HashRouter>
  );
};

export default AppRoute;