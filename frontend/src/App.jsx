import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
// import Button from "./components/Button";
import Hero from "./pages/Hero";
// import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
// import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
// import Register from "./pages/Register";
import Partners from "./pages/Partners";
import Experment from "./pages/Experment";
import PageNotFound from "./pages/404.jsx";

//=================  Admin Imports   =========================
import Dashboard from "./pages/Admin/Dashboard.jsx";
import Login from "./pages/Admin/Login.jsx";
import Logout from "./pages/Admin/Logout";
import Setting from "./pages/Admin/Setting.jsx";
import ExportPage from "./pages/Admin/Exportpage.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LanguageSetting from "./pages/Admin/settings/LanguageSetting.jsx";
import PrivateRoutes from "./pages/utils/PrivateRoute.jsx";

//============================================================

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Navbar />
              <div id="defaults">
                <div id="home">
                  <Hero />
                </div>
                <div id="aboutus">
                  <Features />
                </div>
                <div id="partners">
                  <Partners />
                </div>
                <div id="register">
                  <Experment />
                </div>
                <div id="contact">
                  <ContactUs />
                </div>
                <Footer />
              </div>
            </Fragment>
          }
        />
        <Route path="takemetomyadmin/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="takemetomyadmin/dashboard" element={<Dashboard />} />
          <Route path="takemetomyadmin/logout" element={<Logout />} />
          <Route path="takemetomyadmin/setting" element={<Setting />} />
          <Route path="takemetomyadmin/export" element={<ExportPage />} />
          <Route
            path="takemetomyadmin/languageSetting"
            element={<LanguageSetting />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default App;
