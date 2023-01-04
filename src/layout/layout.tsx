// import '@/styles/dist.css';
import React from "react";
import { Link, Outlet } from "react-router-dom";
// import AuthGuard from '../AuthGuard';
// import Loader from '../Loader';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./global.css";
import Sidebar from "@/components/Sidebar";
// import AuthGuard from "@/components/AuthGuard";
export default function RootLayout({}: {}) {
  return (
    <>
      {/* <AuthGuard> */}
        {/* <Loader> */}
        <Header />
        {/* BEGIN MAIN CONTAINER  */}
        <div className="main-container" id="container">
          <div className="overlay"></div>
          <div className="search-overlay"></div>
          {/* <!--  BEGIN SIDEBAR  --> */}
          <Sidebar />
          {/* <!--  END SIDEBAR  --> */}

          {/* <!--  BEGIN CONTENT AREA  --> */}
          <div id="content" className="main-content">
            <div className="layout-px-spacing">
              <div className="middle-content container-xxl p-0">
                <Outlet />
              </div>
            </div>
            {/* <!--  BEGIN FOOTER  --> */}
            <Footer />
            {/* <!--  END FOOTER  --> */}
          </div>
          {/* <!--  END CONTENT AREA  --> */}
        </div>
        {/* </Loader> */}
        {/* <Script /> */}
      {/* </AuthGuard> */}
    </>
  );
}
