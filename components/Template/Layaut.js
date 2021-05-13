import React from "react";
import Navbar from "../Molecules/Navbar/Navbar";
import Head from "next/head";
import Footer from "../Molecules/Footer/Footer";
export default function Layaut({ children }) {
  return (
    <div className="Bjt">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer/>
    </div>
  );
}
